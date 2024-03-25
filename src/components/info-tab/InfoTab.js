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
  specificTask,
  onChangeSpecificTask,
}) {
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isAddTask, setIsAddTask] = useState(false);
  const [isTaskInfo, setIsTaskInfo] = useState(false);

  useEffect(() => {
    function updateInfoNav() {
      if (specificDate !== "") {
        setIsAddTask(true);
        setIsHomeOpen(false);
        setIsTaskInfo(false);

        return;
      }

      if (Object.keys(specificTask).length !== 0) {
        setIsAddTask(false);
        setIsHomeOpen(false);
        setIsTaskInfo(true);
      }
    }

    updateInfoNav();
  }, [specificDate, specificTask]);
  return (
    <section id="info-tab">
      <InfoTabNav
        onOpenHome={setIsHomeOpen}
        onOpenAddTask={setIsAddTask}
        onOpenTaskInfo={setIsTaskInfo}
        onChangeSpecificDate={onChangeSpecificDate}
        onChangeSpecificTask={onChangeSpecificTask}
      />
      {isHomeOpen && <InfoHome />}
      {isAddTask && (
        <InfoAddTask
          tasks={tasks}
          onAddTasks={onAddTasks}
          specificDate={specificDate}
          key={specificDate}
        />
      )}
      {isTaskInfo && (
        <InfoTaskInfo key={specificTask.id} specificTask={specificTask} />
      )}
    </section>
  );
}
