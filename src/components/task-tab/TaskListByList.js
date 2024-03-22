import SelectForm from "../SelectForm";
import TaskContent from "./TaskContent";
//TaskListByList meaning that all task are placed in unordered list
export default function TaskListByList({
  tasks,
  showDelete,
  onUpdateTask,
  isDeleting,
  onStatusChange,
  onGetSpecificTask,
  onGetDate,
}) {
  const statuses = ["Complete", "Ongoing", "Upcoming"];
  function handleGettingTask(task) {
    onGetSpecificTask(task);
    onGetDate("");
  }
  return (
    <>
      <ul className="task-by-list">
        {tasks.tasks.map((task) => (
          <TaskContent
            task={task}
            tasks={tasks}
            key={task.id}
            isDeleting={isDeleting}
            onClick={() => handleGettingTask(task)}
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
              <SelectForm
                className={`task-status task-status-${task.status.toLowerCase()}`}
                value={task.status}
                onChange={(e) => onStatusChange(e.target.value, task.id, tasks)}
                data={statuses}
              />
            </span>
          </TaskContent>
        ))}
      </ul>
    </>
  );
}
