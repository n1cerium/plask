export default function ButtonOptions({
  tasks,
  onCancelDelete,
  onDeletingTasks,
}) {
  return (
    <div className="task-delete-buttons">
      <button onClick={() => onCancelDelete(false)}>Cancel</button>
      <button onClick={() => onDeletingTasks(tasks)}>Delete</button>
    </div>
  );
}
