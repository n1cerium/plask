//TaskListByList meaning that all task are placed in unordered list
export default function TaskListByList({
  tasks,
  isDeleting,
  onUpdateTask,
  children,
}) {
  return (
    <>
      <ul className="task-by-list">
        {tasks.tasks.map((task) => (
          <li className={`task-${task.status.toLowerCase()}`} key={task.id}>
            {isDeleting ? (
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
            <span>{task.status}</span>
          </li>
        ))}
      </ul>
      {tasks.tasks.length !== 0 && <>{children} </>}
    </>
  );
}
