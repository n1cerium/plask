import { useState } from "react";
import InfoTab from "./info-tab/InfoTab";
import TaskTab from "./task-tab/TaskTab";

export default function Main() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      dayOfTheWeek: "Monday",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          status: "Complete",
          willDelete: false,
        },
        {
          id: 2,
          name: "Task 2",
          status: "Ongoing",
          willDelete: false,
        },
        {
          id: 3,
          name: "Task 3",
          status: "Upcoming",
          willDelete: false,
        },
        {
          id: 4,
          name: "Task 4",
          status: "Upcoming",
          willDelete: false,
        },
      ],
    },
    {
      id: 2,
      dayOfTheWeek: "Tuesday",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          status: "Complete",
          willDelete: false,
        },
        {
          id: 2,
          name: "Task 2",
          status: "Ongoing",
          willDelete: false,
        },
        {
          id: 3,
          name: "Task 3",
          status: "Upcoming",
          willDelete: false,
        },
      ],
    },
    {
      id: 3,
      dayOfTheWeek: "Wednesday",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          status: "Complete",
          willDelete: false,
        },
        {
          id: 2,
          name: "Task 2",
          status: "Ongoing",
          willDelete: false,
        },
        {
          id: 3,
          name: "Task 3",
          status: "Upcoming",
          willDelete: false,
        },
      ],
    },
    {
      id: 4,
      dayOfTheWeek: "Thursday",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          status: "Complete",
          willDelete: false,
        },
        {
          id: 2,
          name: "Task 2",
          status: "Ongoing",
          willDelete: false,
        },
        {
          id: 3,
          name: "Task 3",
          status: "Upcoming",
          willDelete: false,
        },
      ],
    },
    {
      id: 5,
      dayOfTheWeek: "Friday",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          status: "Complete",
          willDelete: false,
        },
        {
          id: 2,
          name: "Task 2",
          status: "Ongoing",
          willDelete: false,
        },
        {
          id: 3,
          name: "Task 3",
          status: "Upcoming",
          willDelete: false,
        },
      ],
    },
    {
      id: 6,
      dayOfTheWeek: "Saturday",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          status: "Complete",
          willDelete: false,
        },
        {
          id: 2,
          name: "Task 2",
          status: "Ongoing",
          willDelete: false,
        },
        {
          id: 3,
          name: "Task 3",
          status: "Upcoming",
          willDelete: false,
        },
      ],
    },
    {
      id: 7,
      dayOfTheWeek: "Sunday",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          status: "Complete",
          willDelete: false,
        },
        {
          id: 2,
          name: "Task 2",
          status: "Ongoing",
          willDelete: false,
        },
        {
          id: 3,
          name: "Task 3",
          status: "Upcoming",
          willDelete: false,
        },
      ],
    },
    {
      id: 8,
      dayOfTheWeek: "Monday",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          status: "Complete",
          willDelete: false,
        },
        {
          id: 2,
          name: "Task 2",
          status: "Ongoing",
          willDelete: false,
        },
        {
          id: 3,
          name: "Task 3",
          status: "Upcoming",
          willDelete: false,
        },
      ],
    },
    {
      id: 9,
      dayOfTheWeek: "Tuesday",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          status: "Complete",
          willDelete: false,
        },
        {
          id: 2,
          name: "Task 2",
          status: "Ongoing",
          willDelete: false,
        },
        {
          id: 3,
          name: "Task 3",
          status: "Upcoming",
          willDelete: false,
        },
      ],
    },
    {
      id: 10,
      dayOfTheWeek: "Wednesday",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          status: "Complete",
          willDelete: false,
        },
        {
          id: 2,
          name: "Task 2",
          status: "Ongoing",
          willDelete: false,
        },
        {
          id: 3,
          name: "Task 3",
          status: "Upcoming",
          willDelete: false,
        },
      ],
    },
    {
      id: 11,
      dayOfTheWeek: "Thursday",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          status: "Complete",
          willDelete: false,
        },
        {
          id: 2,
          name: "Task 2",
          status: "Ongoing",
          willDelete: false,
        },
        {
          id: 3,
          name: "Task 3",
          status: "Upcoming",
          willDelete: false,
        },
      ],
    },
    {
      id: 12,
      dayOfTheWeek: "Friday",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          status: "Complete",
          willDelete: false,
        },
        {
          id: 2,
          name: "Task 2",
          status: "Ongoing",
          willDelete: false,
        },
        {
          id: 3,
          name: "Task 3",
          status: "Upcoming",
          willDelete: false,
        },
      ],
    },
    {
      id: 13,
      dayOfTheWeek: "Saturday",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          status: "Complete",
          willDelete: false,
        },
        {
          id: 2,
          name: "Task 2",
          status: "Ongoing",
          willDelete: false,
        },
        {
          id: 3,
          name: "Task 3",
          status: "Upcoming",
          willDelete: false,
        },
      ],
    },
    {
      id: 14,
      dayOfTheWeek: "Monday",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          status: "Complete",
          willDelete: false,
        },
        {
          id: 2,
          name: "Task 2",
          status: "Ongoing",
          willDelete: false,
        },
        {
          id: 3,
          name: "Task 3",
          status: "Upcoming",
          willDelete: false,
        },
      ],
    },
    {
      id: 15,
      dayOfTheWeek: "Tuesday",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          status: "Complete",
          willDelete: false,
        },
        {
          id: 2,
          name: "Task 2",
          status: "Ongoing",
          willDelete: false,
        },
        {
          id: 3,
          name: "Task 3",
          status: "Upcoming",
          willDelete: false,
        },
      ],
    },
  ]);
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
