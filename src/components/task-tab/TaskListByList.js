import TaskContent from "./TaskContent";
//TaskListByList meaning that all task are placed in unordered list
export default function TaskListByList({
  tasks,
  showDelete,
  onUpdateTask,
  isDeleting,
  onStatusChange,
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
            onStatusChange={onStatusChange}
          />
        ))}
      </ul>
    </>
  );
}
