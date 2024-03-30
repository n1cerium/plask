import { useState } from "react";
import InfoTab from "./info-tab/InfoTab";
import TaskTab from "./task-tab/TaskTab";

export default function Main() {
  const [tasks, setTasks] = useState(
    Array.from({ length: 15 }, (_, i) => i + 1)
  );
  const [specifiedDate, setSpecifiedDate] = useState("");
  const [specificTask, setSpecificTask] = useState({});

  return (
    <main id="main-content">
      <InfoTab
        tasks={tasks}
        onAddTasks={setTasks}
        specificDate={specifiedDate}
        onChangeSpecificDate={setSpecifiedDate}
        specificTask={specificTask}
        onChangeSpecificTask={setSpecificTask}
      />
      <TaskTab
        tasks={tasks}
        onUpdateTasks={setTasks}
        onGetDate={setSpecifiedDate}
        onGetSpecificTask={setSpecificTask}
      />
    </main>
  );
}
