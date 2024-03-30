export default function TaskContent({ task, isDeleting, onClick, children }) {
  const statusClassname = task.status.toLowerCase();
  return (
    <li
      className={`task-${statusClassname} ${
        task.willDelete && isDeleting ? "task-delete" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
