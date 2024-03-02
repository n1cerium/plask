import { useUnmountedAnim } from "../../custom hooks/useUnmountedAnim";

//TaskListByList meaning that all task are placed in unordered list
export default function TaskListByList({
  tasks,
  showDelete,
  onUpdateTask,
  isDeleting,
  children,
}) {
  return (
    <>
      <ul className="task-by-list">
        {tasks.tasks.map((task) => (
          <TaskContent
            task={task}
            tasks={tasks}
            showDelete={showDelete}
            onUpdateTask={onUpdateTask}
            key={task.id}
            isDeleting={isDeleting}
          />
        ))}
      </ul>
    </>
  );
}
function TaskContent({ task, tasks, showDelete, onUpdateTask, isDeleting }) {
  const isPerformAnim = useUnmountedAnim(task.isDeleted, 10000);
  const isTaskSelected = !isPerformAnim;
  return (
    <>
      {isTaskSelected && (
        <li
          className={`task-${task.status.toLowerCase()} ${
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
          <span>{task.status}</span>
        </li>
      )}
    </>
  );
}
