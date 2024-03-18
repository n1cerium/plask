import { useState } from "react";

export default function TaskContent({ task, isDeleting, children }) {
  const statusClassname = task.status.toLowerCase();
  return (
    <li
      className={`task-${statusClassname} ${
        task.willDelete && isDeleting ? "task-delete" : ""
      }`}
    >
      {children}
    </li>
  );
}
