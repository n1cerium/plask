import { useState } from "react";

import Tasks from "./Tasks";
import TaskHeader from "./TaskHeader";

import { useUnmountedAnim } from "../../custom hooks/useUnmountedAnim";

export default function TaskDatesList({
  tasks,
  onGetDate,
  children,
  setShowDelete,
  onGetSpecificTask,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isRendering = useUnmountedAnim(isOpen, 200);

  function handleOpenMain() {
    setIsOpen((o) => !o);
  }
  function handleDeleteToggle() {
    setShowDelete((d) => !d);
  }
  function handleAddingTask() {
    onGetDate(tasks.date);
    onGetSpecificTask({});
  }

  return (
    <li>
      <TaskHeader
        tasks={tasks}
        isOpen={isOpen}
        onOpenMain={handleOpenMain}
        onDeleteToggle={handleDeleteToggle}
        onAddTask={handleAddingTask}
      />
      {isRendering && (
        <Tasks className={isOpen ? "task-list-open" : "task-list-close"}>
          {isOpen && children}
        </Tasks>
      )}
    </li>
  );
}
