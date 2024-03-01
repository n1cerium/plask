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
}) {
  return (
    <header className="task-header">
      <p>
        <span style={{ fontWeight: "bold" }}>{tasks.dayOfTheWeek}</span>,{" "}
        <span style={{ fontSize: "0.9em" }}>{tasks.date}</span>
      </p>
      <div>
        {isOpen && (
          <>
            <ButtonIcon icon={faPlus} />
            <ButtonIcon icon={faSort} />
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
