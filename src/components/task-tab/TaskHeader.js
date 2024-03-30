import { useEffect, useRef, useState } from "react";
import ButtonIcon from "../buttons/ButtonIcon";
import {
  faTrash,
  faPlus,
  faAngleUp,
  faAngleDown,
  faSort,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { toDate } from "../../javascript-function/utilities";

export default function TaskHeader({
  tasks,
  isOpen,
  onOpenMain,
  onDeleteToggle,
  onAddTask,
  onUpdateTasks,
}) {
  const sortOptions = [
    "Name",
    "Category",
    "Allocated Time",
    "Priority Level",
    "Due Date",
  ];
  const [isSortOptionOpen, setIsSortOptionOpen] = useState(false);
  const sortIconRef = useRef(null);
  useEffect(() => {
    function handleClickOutsideDiv(e) {
      //sortIconRef.current check if element exists and if its child does not contains elements
      if (sortIconRef.current && !sortIconRef.current.contains(e.target)) {
        setIsSortOptionOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutsideDiv);

    return () => document.removeEventListener("click", handleClickOutsideDiv);
  }, [isSortOptionOpen]);

  function handleOpenSortOption() {
    setIsSortOptionOpen((open) => !open);
  }
  function handleSorting(option) {
    let tasksCopy = tasks.tasks.slice();
    if (option === "Name") {
      tasksCopy = tasksCopy.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    if (option === "Category") {
      tasksCopy = tasksCopy.sort((a, b) => (a.category > b.category ? 1 : -1));
    }
    if (option === "Due Date") {
      tasksCopy = tasksCopy.sort((a, b) =>
        toDate(a.endDate) > toDate(b.endDate) ? 1 : -1
      );
    }
    if (option === "Allocated Time") {
      tasksCopy = tasksCopy.sort((a, b) => a.allocatedTime - b.allocatedTime);
    }
    if (option === "Priority Level") {
      tasksCopy = tasksCopy.sort((a, b) => a.priorityLevel - b.priorityLevel);
    }

    onUpdateTasks((currentTask) =>
      currentTask.map((t) =>
        t.id === tasks.id ? { ...t, tasks: tasksCopy } : t
      )
    );
  }
  return (
    <header className="task-header">
      <p>
        <span style={{ fontWeight: "bold" }}>{tasks.dayOfTheWeek}</span>,{" "}
        <span style={{ fontSize: "0.9em" }}>{tasks.date}</span>
      </p>
      <span className="task-header-allocated">
        {tasks.allocatedTimeLeft} time left to allocate
      </span>
      <div className="task-icons">
        {isOpen && (
          <>
            <ButtonIcon icon={faPlus} onClick={onAddTask} />
            <span className="task-sort-icon" ref={sortIconRef}>
              <ButtonIcon icon={faSort} onClick={handleOpenSortOption} />
              {isSortOptionOpen && (
                <ul>
                  {sortOptions.map((option) => (
                    <li onClick={() => handleSorting(option)}>{option}</li>
                  ))}
                </ul>
              )}
            </span>
            <ButtonIcon icon={faTrash} onClick={onDeleteToggle} />
          </>
        )}

        <ButtonIcon
          icon={isOpen ? faAngleUp : faAngleDown}
          onClick={onOpenMain}
        />
      </div>
    </header>
  );
}
