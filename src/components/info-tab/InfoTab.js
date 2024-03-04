import { useState } from "react";
import InfoTabNav from "./InfoTabNav";
import InfoHome from "./InfoHome";
import InfoAddTask from "./InfoAddTask";
import InfoTaskInfo from "./InfoTaskInfo";
export default function InfoTab() {
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isAddTask, setIsAddTask] = useState(false);
  const [isTaskInfo, setIsTaskInfo] = useState(false);

  return (
    <section id="info-tab">
      <InfoTabNav
        onOpenHome={setIsHomeOpen}
        onOpenAddTask={setIsAddTask}
        onOpenTaskInfo={setIsTaskInfo}
      />
      {isHomeOpen && <InfoHome />}
      {isAddTask && <InfoAddTask />}
      {isTaskInfo && <InfoTaskInfo />}
    </section>
  );
}
