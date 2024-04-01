import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import TaskDatesList from "./TaskDatesList";
import ButtonOptions from "../buttons/ButtonOptions";
import TaskListByList from "./TaskListByList";
import { getDate } from "../../javascript-function/utilities";

export default function TaskTab({
  tasks,
  onUpdateTasks,
  onGetDate,
  onGetSpecificTask,
}) {
  //console.log(getTodayDate(0));

  const [isDeleting, setIsDeleting] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  // function handleDeleteToggle() {
  //   setShowDelete((d) => !d);
  // }

  function updateTasks(task, updatedtask) {
    onUpdateTasks((allTasks) =>
      allTasks.map((ts) =>
        ts.id === task.id
          ? {
              ...ts,
              tasks: updatedtask,
            }
          : ts
      )
    );
  }
  function handleCheckedTask(taskID, tasksList) {
    const tasks = tasksList.tasks;
    let updatedTask = tasks.map((t) =>
      t.id === taskID ? { ...t, willDelete: !t.willDelete } : t
    );

    updateTasks(tasksList, updatedTask);
  }
  function handleDeletingTasks(tasksList) {
    const tasks = tasksList.tasks;
    let updatedTask = tasks.filter((t) => !t.willDelete);

    setIsDeleting(true);

    setTimeout(() => {
      updateTasks(tasksList, updatedTask);
      setIsDeleting(false);
    }, 250);
  }
  function handleChangeStatus(currentValue, taskID, tasksList) {
    const tasks = tasksList.tasks;
    let updatedTask = tasks.map((t) =>
      t.id === taskID ? { ...t, status: currentValue } : t
    );

    updateTasks(tasksList, updatedTask);
  }

  useEffect(() => {
    if (localStorage.getItem("isTasksInitialized") !== "yes") {
      onUpdateTasks(
        Array.from({ length: 15 }, (_, i) => i + 1).map(
          (currentTask, index) => {
            let currentDate = getDate(index);
            return {
              ...currentTask,
              id: uuid(),
              date: currentDate.date,
              dayOfTheWeek: currentDate.dayOfTheWeek,
              allocatedTimeLeft: 960,
              tasks: [],
            };
          }
        )
      );
      localStorage.setItem("isTasksInitialized", "yes");
    }
  }, [onUpdateTasks]);

  return (
    <ul id="task-tab">
      {tasks.map((tasks, index) => (
        <TaskDatesList
          tasks={tasks}
          key={index}
          onGetDate={onGetDate}
          onGetSpecificTask={onGetSpecificTask}
          setShowDelete={setShowDelete}
          onUpdateTasks={onUpdateTasks}
        >
          <TaskListByList
            tasks={tasks}
            onUpdateTask={handleCheckedTask}
            showDelete={showDelete}
            isDeleting={isDeleting}
            onStatusChange={handleChangeStatus}
            onGetSpecificTask={onGetSpecificTask}
            onGetDate={onGetDate}
          />
          {showDelete && tasks.tasks.length !== 0 && (
            <ButtonOptions
              tasks={tasks}
              onCancelDelete={setShowDelete}
              onDeletingTasks={handleDeletingTasks}
            />
          )}
        </TaskDatesList>
      ))}
    </ul>
  );
}
