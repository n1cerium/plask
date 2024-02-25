import { useEffect, useState } from "react";

/**
 * [
 *  {
 *    name: Task 1
 *    status: Complete
 *  },
 *  {
 *    name: Task 2
 *    status: Complete
 *  }
 *  {
 *    name: Task 3
 *    status: Complete
 *  }
 * ]
 *
 */
export default function TaskTab() {
  return (
    <ul id="task-tab">
      {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
        <TaskDatesList key={num} />
      ))}
    </ul>
  );
}
function TaskDatesList() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  function handleOpenMain() {
    setIsOpen((o) => !o);
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
        <p>Header</p>
        <span onClick={handleOpenMain}>{isOpen ? "-" : "+"}</span>
      </header>
      {isRendered && (
        <Tasks
          className={isOpen ? "task-list-open" : "task-list-close"}
          isOpen={isOpen}
        />
      )}
    </li>
  );
}
function Tasks({ className, isOpen }) {
  return <main className={className}>{isOpen && <TaskListByList />}</main>;
}

//TaskListByList meaning that all task are placed in unordered list
function TaskListByList() {
  return (
    <ul className="task-by-list">
      <li>
        <span>Task 1</span>
        <span>Completed</span>
      </li>
      <li>
        <span>Task 2</span>
        <span>Completed</span>
      </li>
      <li>
        <span>Task 3</span>
        <span>Completed</span>
      </li>
      <li>
        <span>Task 4</span>
        <span>Completed</span>
      </li>
    </ul>
  );
}

function TaskListBySection({ taskName }) {
  return (
    <section className="task-list-by-section">
      <header>{taskName}</header>
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    </section>
  );
}
