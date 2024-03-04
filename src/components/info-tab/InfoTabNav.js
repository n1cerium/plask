import ButtonIcon from "../buttons/ButtonIcon";
import {
  faHouse,
  faPenToSquare,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
export default function InfoTabNav({
  onOpenHome,
  onOpenAddTask,
  onOpenTaskInfo,
}) {
  function handleOpeningHome() {
    onOpenHome(true);
    onOpenAddTask(false);
    onOpenTaskInfo(false);
  }
  function handleOpeningAddingTask() {
    onOpenHome(false);
    onOpenAddTask(true);
    onOpenTaskInfo(false);
  }
  function handleOpeningTaskInfo() {
    onOpenHome(false);
    onOpenAddTask(false);
    onOpenTaskInfo(true);
  }
  return (
    <nav id="info-navigation">
      <ButtonIcon icon={faHouse} onClick={handleOpeningHome} />
      <ButtonIcon icon={faPenToSquare} onClick={handleOpeningAddingTask} />
      <ButtonIcon icon={faCircleInfo} onClick={handleOpeningTaskInfo} />
    </nav>
  );
}
