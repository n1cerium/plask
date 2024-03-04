import { useState } from "react";

export default function TaskContent({
  task,
  tasks,
  showDelete,
  onUpdateTask,
  onStatusChange,
  isDeleting,
}) {
  const statusClassname = task.status.toLowerCase();
  return (
    <li
      className={`task-${statusClassname} ${
        task.willDelete && isDeleting ? "task-delete" : ""
      }`}
    >
      {showDelete ? (
        <span>
          <input
            className="task-delete-checkbox"
            type="checkbox"
            checked={task.willDelete}
            onChange={() => onUpdateTask(task.id, tasks)}
          />
          <label>{task.name}</label>
        </span>
      ) : (
        <span>{task.name}</span>
      )}
      <span>
        <select
          className={`task-status task-status-${statusClassname}`}
          value={task.status}
          onChange={(e) => onStatusChange(e.target.value, task.id, tasks)}
        >
          <option value="Complete">Complete</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Upcoming">Upcoming</option>
        </select>
      </span>
    </li>
  );
}
