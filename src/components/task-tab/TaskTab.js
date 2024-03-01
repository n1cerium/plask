import { useEffect, useState } from "react";
import TaskDatesList from "./TaskDatesList";
const weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function TaskTab() {
  //console.log(getTodayDate(0));
  const [tasks, setTasks] = useState([
    {
      id: 1,
      dayOfTheWeek: "Monday",
      date: "January 1, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete", willDelete: false },
        { id: 2, name: "Task 2", status: "OnGoing", willDelete: false },
        { id: 3, name: "Task 3", status: "Upcoming", willDelete: false },
        { id: 4, name: "Task 4", status: "Upcoming", willDelete: false },
      ],
    },
    {
      id: 2,
      dayOfTheWeek: "Tuesday",
      date: "January 2, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete", willDelete: false },
        { id: 2, name: "Task 2", status: "OnGoing", willDelete: false },
        { id: 3, name: "Task 3", status: "Upcoming", willDelete: false },
      ],
    },
    {
      id: 3,
      dayOfTheWeek: "Wednesday",
      date: "January 3, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete", willDelete: false },
        { id: 2, name: "Task 2", status: "OnGoing", willDelete: false },
        { id: 3, name: "Task 3", status: "Upcoming", willDelete: false },
      ],
    },
    {
      id: 4,
      dayOfTheWeek: "Thursday",
      date: "January 4, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete", willDelete: false },
        { id: 2, name: "Task 2", status: "OnGoing", willDelete: false },
        { id: 3, name: "Task 3", status: "Upcoming", willDelete: false },
      ],
    },
    {
      id: 5,
      dayOfTheWeek: "Friday",
      date: "January 5, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete", willDelete: false },
        { id: 2, name: "Task 2", status: "OnGoing", willDelete: false },
        { id: 3, name: "Task 3", status: "Upcoming", willDelete: false },
      ],
    },
    {
      id: 6,
      dayOfTheWeek: "Saturday",
      date: "January 6, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete", willDelete: false },
        { id: 2, name: "Task 2", status: "OnGoing", willDelete: false },
        { id: 3, name: "Task 3", status: "Upcoming", willDelete: false },
      ],
    },
    {
      id: 7,
      dayOfTheWeek: "Sunday",
      date: "January 7, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete", willDelete: false },
        { id: 2, name: "Task 2", status: "OnGoing", willDelete: false },
        { id: 3, name: "Task 3", status: "Upcoming", willDelete: false },
      ],
    },
    {
      id: 8,
      dayOfTheWeek: "Monday",
      date: "January 8, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete", willDelete: false },
        { id: 2, name: "Task 2", status: "OnGoing", willDelete: false },
        { id: 3, name: "Task 3", status: "Upcoming", willDelete: false },
      ],
    },
    {
      id: 9,
      dayOfTheWeek: "Tuesday",
      date: "January 9, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete", willDelete: false },
        { id: 2, name: "Task 2", status: "OnGoing", willDelete: false },
        { id: 3, name: "Task 3", status: "Upcoming", willDelete: false },
      ],
    },
    {
      id: 10,
      dayOfTheWeek: "Wednesday",
      date: "January 10, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete", willDelete: false },
        { id: 2, name: "Task 2", status: "OnGoing", willDelete: false },
        { id: 3, name: "Task 3", status: "Upcoming", willDelete: false },
      ],
    },
    {
      id: 11,
      dayOfTheWeek: "Thursday",
      date: "January 11, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete", willDelete: false },
        { id: 2, name: "Task 2", status: "OnGoing", willDelete: false },
        { id: 3, name: "Task 3", status: "Upcoming", willDelete: false },
      ],
    },
    {
      id: 12,
      dayOfTheWeek: "Friday",
      date: "January 12, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete", willDelete: false },
        { id: 2, name: "Task 2", status: "OnGoing", willDelete: false },
        { id: 3, name: "Task 3", status: "Upcoming", willDelete: false },
      ],
    },
    {
      id: 13,
      dayOfTheWeek: "Saturday",
      date: "January 13, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete", willDelete: false },
        { id: 2, name: "Task 2", status: "OnGoing", willDelete: false },
        { id: 3, name: "Task 3", status: "Upcoming", willDelete: false },
      ],
    },
    {
      id: 14,
      dayOfTheWeek: "Monday",
      date: "January 14, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete", willDelete: false },
        { id: 2, name: "Task 2", status: "OnGoing", willDelete: false },
        { id: 3, name: "Task 3", status: "Upcoming", willDelete: false },
      ],
    },
    {
      id: 15,
      dayOfTheWeek: "Tuesday",
      date: "January 15, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete", willDelete: false },
        { id: 2, name: "Task 2", status: "OnGoing", willDelete: false },
        { id: 3, name: "Task 3", status: "Upcoming", willDelete: false },
      ],
    },
  ]);

  function handleUpdateTask(taskID, tasksList) {
    const tasks = tasksList.tasks;

    let updatedtask = tasks.map((t) =>
      t.id === taskID ? { ...t, willDelete: !t.willDelete } : t
    );

    setTasks((allTasks) =>
      allTasks.map((ts) =>
        ts.id === tasksList.id
          ? {
              ...ts,
              tasks: updatedtask,
            }
          : ts
      )
    );
  }
  function handleDeletingTasks(tasksList) {
    const tasks = tasksList.tasks;
    const tasksNotDeleted = tasks.filter((task) => !task.willDelete);
    setTasks((allTasks) =>
      allTasks.map((ts) =>
        tasksList.id === ts.id ? { ...ts, tasks: tasksNotDeleted } : ts
      )
    );
  }
  useEffect(() => {
    setTasks((ts) =>
      ts.map((currentTask, index) => {
        let currentDate = getDate(index);
        return {
          ...currentTask,
          date: currentDate.date,
          dayOfTheWeek: currentDate.dayOfTheWeek,
        };
      })
    );
    console.log(tasks);
  }, []);

  //this function will return the date and the day of the week
  function getDate(dayToAdd) {
    const today = new Date();

    today.setDate(today.getDate() + dayToAdd);

    let month = today.getMonth();
    let day = today.getDate();
    let year = today.getFullYear();
    let dayWeek = today.getDay();
    console.log(dayWeek);
    return {
      date: `${months[month]} ${day}, ${year}`,
      dayOfTheWeek: weeks[dayWeek],
    };
  }
  return (
    <ul id="task-tab">
      {tasks.map((tasks) => (
        <TaskDatesList
          tasks={tasks}
          key={tasks.id}
          onUpdateTask={handleUpdateTask}
          onDeletingTasks={handleDeletingTasks}
        />
      ))}
    </ul>
  );
}

// function TaskListBySection({ taskName }) {
//   return (
//     <section className="task-list-by-section">
//       <header>{taskName}</header>
//       <ul>
//         <li>Task 1</li>
//         <li>Task 2</li>
//         <li>Task 3</li>
//       </ul>
//     </section>
//   );
// }
