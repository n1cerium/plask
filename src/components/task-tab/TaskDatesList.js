import { useState } from "react";

import Tasks from "./Tasks";
import TaskHeader from "./TaskHeader";
import ButtonOptions from "../buttons/ButtonOptions";
import TaskListByList from "./TaskListByList";

import { useUnmountedAnim } from "../../custom hooks/useUnmountedAnim";

export default function TaskDatesList({
  tasks,
  onUpdateTask,
  onDeletingTasks,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isRendering = useUnmountedAnim(isOpen, 200);
  const [isDeleting, setIsDeleting] = useState(false);

  function handleOpenMain() {
    setIsOpen((o) => !o);
  }
  function handleDeleteToggle() {
    setIsDeleting((d) => !d);
  }

  return (
    <li>
      <TaskHeader
        tasks={tasks}
        isOpen={isOpen}
        onOpenMain={handleOpenMain}
        onDeleteToggle={handleDeleteToggle}
      />
      {isRendering && (
        <Tasks className={isOpen ? "task-list-open" : "task-list-close"}>
          {isOpen && (
            <>
              <TaskListByList
                tasks={tasks}
                onUpdateTask={onUpdateTask}
                isDeleting={isDeleting}
              />
              {isDeleting && tasks.tasks.length !== 0 && (
                <ButtonOptions
                  tasks={tasks}
                  onCancelDelete={setIsDeleting}
                  onDeletingTasks={onDeletingTasks}
                />
              )}
            </>
          )}
        </Tasks>
      )}
    </li>
  );
}
