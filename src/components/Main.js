import { useEffect, useState } from "react";
import InfoTab from "./info-tab/InfoTab";
import TaskTab from "./task-tab/TaskTab";

export default function Main() {
  const [tasks, setTasks] = useState(function () {
    const storedTasks = localStorage.getItem("tasks");
    return JSON.parse(storedTasks);
  });
  const [specifiedDate, setSpecifiedDate] = useState("");
  const [specificTask, setSpecificTask] = useState({});
  console.log(JSON.parse(localStorage.getItem("tasks")));
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main id="main-content">
      <InfoTab
        tasks={tasks}
        onAddTasks={setTasks}
        specificDate={specifiedDate}
        onChangeSpecificDate={setSpecifiedDate}
        specificTask={specificTask}
        onChangeSpecificTask={setSpecificTask}
      />
      <TaskTab
        tasks={tasks}
        onUpdateTasks={setTasks}
        onGetDate={setSpecifiedDate}
        onGetSpecificTask={setSpecificTask}
      />
    </main>
  );
}
