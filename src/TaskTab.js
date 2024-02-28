import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faAngleUp,
  faAngleDown,
  faSort,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

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
        { id: 1, name: "Task 1", status: "Complete" },
        { id: 2, name: "Task 2", status: "OnGoing" },
        { id: 3, name: "Task 3", status: "Upcoming" },
        { id: 4, name: "Task 4", status: "Upcoming" },
      ],
    },
    {
      id: 2,
      dayOfTheWeek: "Tuesday",
      date: "January 2, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete" },
        { id: 2, name: "Task 2", status: "OnGoing" },
        { id: 3, name: "Task 3", status: "Upcoming" },
      ],
    },
    {
      id: 3,
      dayOfTheWeek: "Wednesday",
      date: "January 3, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete" },
        { id: 2, name: "Task 2", status: "OnGoing" },
        { id: 3, name: "Task 3", status: "Upcoming" },
      ],
    },
    {
      id: 4,
      dayOfTheWeek: "Thursday",
      date: "January 4, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete" },
        { id: 2, name: "Task 2", status: "OnGoing" },
        { id: 3, name: "Task 3", status: "Upcoming" },
      ],
    },
    {
      id: 5,
      dayOfTheWeek: "Friday",
      date: "January 5, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete" },
        { id: 2, name: "Task 2", status: "OnGoing" },
        { id: 3, name: "Task 3", status: "Upcoming" },
      ],
    },
    {
      id: 6,
      dayOfTheWeek: "Saturday",
      date: "January 6, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete" },
        { id: 2, name: "Task 2", status: "OnGoing" },
        { id: 3, name: "Task 3", status: "Upcoming" },
      ],
    },
    {
      id: 7,
      dayOfTheWeek: "Sunday",
      date: "January 7, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete" },
        { id: 2, name: "Task 2", status: "OnGoing" },
        { id: 3, name: "Task 3", status: "Upcoming" },
      ],
    },
    {
      id: 8,
      dayOfTheWeek: "Monday",
      date: "January 8, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete" },
        { id: 2, name: "Task 2", status: "OnGoing" },
        { id: 3, name: "Task 3", status: "Upcoming" },
      ],
    },
    {
      id: 9,
      dayOfTheWeek: "Tuesday",
      date: "January 9, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete" },
        { id: 2, name: "Task 2", status: "OnGoing" },
        { id: 3, name: "Task 3", status: "Upcoming" },
      ],
    },
    {
      id: 10,
      dayOfTheWeek: "Wednesday",
      date: "January 10, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete" },
        { id: 2, name: "Task 2", status: "OnGoing" },
        { id: 3, name: "Task 3", status: "Upcoming" },
      ],
    },
    {
      id: 11,
      dayOfTheWeek: "Thursday",
      date: "January 11, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete" },
        { id: 2, name: "Task 2", status: "OnGoing" },
        { id: 3, name: "Task 3", status: "Upcoming" },
      ],
    },
    {
      id: 12,
      dayOfTheWeek: "Friday",
      date: "January 12, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete" },
        { id: 2, name: "Task 2", status: "OnGoing" },
        { id: 3, name: "Task 3", status: "Upcoming" },
      ],
    },
    {
      id: 13,
      dayOfTheWeek: "Saturday",
      date: "January 13, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete" },
        { id: 2, name: "Task 2", status: "OnGoing" },
        { id: 3, name: "Task 3", status: "Upcoming" },
      ],
    },
    {
      id: 14,
      dayOfTheWeek: "Monday",
      date: "January 14, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete" },
        { id: 2, name: "Task 2", status: "OnGoing" },
        { id: 3, name: "Task 3", status: "Upcoming" },
      ],
    },
    {
      id: 15,
      dayOfTheWeek: "Tuesday",
      date: "January 15, 2024",
      tasks: [
        { id: 1, name: "Task 1", status: "Complete" },
        { id: 2, name: "Task 2", status: "OnGoing" },
        { id: 3, name: "Task 3", status: "Upcoming" },
      ],
    },
  ]);

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
        <TaskDatesList tasks={tasks} key={tasks.id} />
      ))}
    </ul>
  );
}
function TaskDatesList({ tasks }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  function handleOpenMain() {
    setIsOpen((o) => !o);
  }
  function handleDelete() {
    setIsDeleting((deleting) => !deleting);
    console.log("Deleting...");
  }
  // delaying the unmount of TaskList component so it performs the closing animation
  useEffect(() => {
    let timerID;
    //if the TaskList component is closing and is currently rendered
    //set isRendered to false after 0.5 seconds
    if (!isOpen && isRendered) {
      timerID = setTimeout(() => setIsRendered(false), 200);
    } else if (isOpen && !isRendered) {
      //if TaskList is opening and not currently rendered on the screen
      // set isRendered to true so the TaskList component will be rendered on the screen
      setIsRendered(true);
    }

    return () => clearTimeout(timerID);
  }, [isOpen, isRendered]);
  return (
    <li>
      <header className="task-header">
        <p>
          <span style={{ fontWeight: "bold" }}>{tasks.dayOfTheWeek}</span>,{" "}
          <span style={{ fontSize: "0.9em" }}>{tasks.date}</span>
        </p>
        <div>
          {isOpen && (
            <>
              <button>
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button>
                <FontAwesomeIcon icon={faSort} />
              </button>
              <button onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </>
          )}

          <button onClick={handleOpenMain}>
            {isOpen ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </button>
          <button>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
      </header>
      {isRendered && (
        <Tasks className={isOpen ? "task-list-open" : "task-list-close"}>
          {isOpen && (
            <TaskListByList tasks={tasks.tasks} isDeleting={isDeleting} />
          )}
        </Tasks>
      )}
    </li>
  );
}
function Tasks({ className, children }) {
  return <main className={className}>{children}</main>;
}

//TaskListByList meaning that all task are placed in unordered list
function TaskListByList({ tasks, isDeleting }) {
  return (
    <>
      <ul className="task-by-list">
        {tasks.map((task) => (
          <li className={`task-${task.status.toLowerCase()}`} key={task.id}>
            <span>
              {isDeleting && (
                <input className="task-delete-checkbox" type="checkbox" />
              )}

              <span>{task.name}</span>
            </span>
            <span>{task.status}</span>
          </li>
        ))}
      </ul>
      {isDeleting && (
        <div className="task-delete-buttons">
          <button>Cancel</button>
          <button>Delete</button>
        </div>
      )}
    </>
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
