import { useEffect, useState, useRef } from "react";
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
  const [quote, setQuote] = useState(function () {
    const quoteStorage = JSON.parse(localStorage.getItem("quote"));
    return quoteStorage;
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  useEffect(() => {
    async function getQuote() {
      const res = await fetch("https://api.quotable.io/quotes/random");
      const data = await res.json();

      if (today.toDateString() !== localStorage.getItem("yesterday")) {
        setQuote(data[0]);
        localStorage.setItem("yesterday", today.toDateString());
      }
    }

    getQuote();
  });

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

        return;
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
      {isHomeOpen && <InfoHome quote={quote} task={tasks[0].tasks} />}
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
