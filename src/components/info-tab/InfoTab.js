import { useEffect, useState } from "react";
import InfoTabNav from "./InfoTabNav";
import InfoHome from "./InfoHome";
import InfoAddTask from "./InfoAddTask";
import InfoTaskInfo from "./InfoTaskInfo";

export default function InfoTab({
  tasks,
  onAddTasks,
  specificDate,
  onChangeSpecificDate,
}) {
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isAddTask, setIsAddTask] = useState(false);
  const [isTaskInfo, setIsTaskInfo] = useState(false);
  console.log(specificDate);
  useEffect(() => {
    if (specificDate !== "") {
      setIsAddTask(true);
      setIsHomeOpen(false);
      setIsTaskInfo(false);
    }
  }, [specificDate]);
  return (
    <section id="info-tab">
      <InfoTabNav
        onOpenHome={setIsHomeOpen}
        onOpenAddTask={setIsAddTask}
        onOpenTaskInfo={setIsTaskInfo}
        onChangeSpecificDate={onChangeSpecificDate}
      />
      {isHomeOpen && <InfoHome />}
      {isAddTask && (
        <InfoAddTask
          onAddTasks={onAddTasks}
          specificDate={specificDate}
          key={specificDate}
        />
      )}
      {isTaskInfo && <InfoTaskInfo />}
    </section>
  );
}
