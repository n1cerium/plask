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

export default function TaskHeader({
  tasks,
  isOpen,
  onOpenMain,
  onDeleteToggle,
  onAddTask,
}) {
  const [isSortOptionOpen, setIsSortOptionOpen] = useState(false);
  const sortIconRef = useRef(null);
  function handleOpenSortOption() {
    setIsSortOptionOpen((open) => !open);
  }
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
  return (
    <header className="task-header">
      <p>
        <span style={{ fontWeight: "bold" }}>{tasks.dayOfTheWeek}</span>,{" "}
        <span style={{ fontSize: "0.9em" }}>{tasks.date}</span>
      </p>
      <div>
        {isOpen && (
          <>
            <ButtonIcon icon={faPlus} onClick={onAddTask} />
            <span className="task-sort-icon" ref={sortIconRef}>
              <ButtonIcon icon={faSort} onClick={handleOpenSortOption} />
              {isSortOptionOpen && (
                <ul>
                  <li>Hi</li>
                  <li>Hello</li>
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
        <ButtonIcon icon={faEllipsis} />
      </div>
    </header>
  );
}
