import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import SelectForm from "../SelectForm";
import InfoBox from "./InfoBox";
import { toDate } from "../../javascript-function/utilities";
import { isValidData } from "../../javascript-function/error_check";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const getAllYears = Array.from(
  { length: 11 },
  (_, i) => new Date().getFullYear() + i
);

export default function AddTask({ tasks, onAddTasks, specificDate }) {
  let fullDate;
  if (specificDate === "") {
    fullDate = {
      month: new Date().getMonth(),
      day: new Date().getDate(),
      year: new Date().getFullYear(),
    };
  } else {
    const clickedDate = toDate(specificDate);
    fullDate = {
      month: clickedDate.getMonth(),
      day: clickedDate.getDate(),
      year: clickedDate.getFullYear(),
    };
  }

  const [task, setTask] = useState({
    id: 0,
    name: "",
    description: "",
    category: "",
    allocatedTime: 0,
    priorityLevel: 1,
    startDate: { ...fullDate },
    endDate: { ...fullDate },
  });
  const [error, setError] = useState({
    nameErr: "",
    categoryErr: "",
    allocatedErr: "",
    endDateErr: "",
    pastDateErr: "",
    isError: false,
  });

  const endFullDate = new Date(
    task.endDate.year,
    task.endDate.month,
    task.endDate.day
  );

  function handleAddTask() {
    let errorList = isValidData(task);

    setError(errorList);

    if (errorList.isError) {
      return;
    }

    onAddTasks((allTasks) =>
      allTasks.map((t) => {
        const taskCurrentDate = toDate(t.date);

        if (
          taskCurrentDate <= endFullDate &&
          t.allocatedTimeLeft - task.allocatedTime >= 0
        ) {
          const newTask = {
            ...task,
            id: uuid(),
            status: "Upcoming",
            endDate: `${months[task.endDate.month]} ${task.endDate.day}, ${
              task.endDate.year
            }`,
            willDelete: false,
          };
          return {
            ...t,
            allocatedTimeLeft: t.allocatedTimeLeft - task.allocatedTime,
            tasks: [...t.tasks, newTask],
          };
        }
        return t;
      })
    );
  }
  function handleSetTaskData(data) {
    setTask((t) => ({ ...t, ...data }));
  }
  return (
    <InfoBox className="info-task" title="Adding a Task">
      <section id="info-add-task-input">
        <InputForm
          type="text"
          label="Name:"
          value={task.name}
          onChange={(e) => handleSetTaskData({ name: e.target.value })}
        />
        <InputForm
          type="text"
          label="Description:"
          value={task.description}
          onChange={(e) => handleSetTaskData({ description: e.target.value })}
          placeholder="Optional..."
        />
        <InputForm
          type="text"
          label="Category:"
          value={task.category}
          onChange={(e) => handleSetTaskData({ category: e.target.value })}
        />
        <InputForm
          id="input-time-allocate"
          type="number"
          label="Allocated Time in minutes: "
          value={task.allocatedTime}
          onChange={(e) => handleSetTaskData({ allocatedTime: e.target.value })}
        />

        <div id="input-priority">
          <label>Priority Level: </label>
          <SelectForm
            className="input-select"
            data={Array.from({ length: 5 }, (_, i) => i + 1)}
            onChange={(e) =>
              handleSetTaskData({ priorityLevel: e.target.value })
            }
            value={task.priorityLevel}
          />
        </div>
        <DateForm
          label="Start Date: "
          date={task.startDate}
          onChangeDate={setTask}
          dateFor="Start Date"
        />
        <DateForm
          label="Due Date: "
          date={task.endDate}
          onChangeDate={setTask}
          dateFor="End Date"
        />
      </section>
      <div id="input-error">
        {error.nameErr && (
          <>
            <span>{error.nameErr}</span>
            <br />
          </>
        )}
        {error.categoryErr && (
          <>
            <span>{error.categoryErr}</span>
            <br />
          </>
        )}
        {error.pastDateErr && (
          <>
            <span>{error.pastDateErr}</span>
            <br />
          </>
        )}
        {error.endDateErr && (
          <>
            <span>{error.endDateErr}</span>
            <br />
          </>
        )}
        {error.allocatedErr && (
          <>
            <span>{error.allocatedErr}</span>
            <br />
          </>
        )}
      </div>
      <button id="input-button-add" onClick={handleAddTask}>
        Add This Task
      </button>
    </InfoBox>
  );
}
function InputForm({ id, type, label, value, onChange, placeholder }) {
  return (
    <div id={id}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
function DateForm({ label, date, onChangeDate, dateFor }) {
  const totalDays = new Date(date.year, date.month + 1, 0).getDate();
  let dateCopy = { ...date };

  function updatedTaskDate() {
    if (dateFor === "Start Date") {
      onChangeDate((t) => ({ ...t, startDate: dateCopy }));
    }
    if (dateFor === "End Date") {
      onChangeDate((t) => ({ ...t, endDate: dateCopy }));
    }
  }

  function handleMonthChange(e) {
    dateCopy = { ...dateCopy, month: months.indexOf(e.target.value) };
    updatedTaskDate();
  }
  function handleDayChange(e) {
    dateCopy = { ...dateCopy, day: e.target.value };
    updatedTaskDate();
  }
  function handleYearChange(e) {
    dateCopy = { ...dateCopy, year: e.target.value };
    updatedTaskDate();
  }

  return (
    <div className="input-date">
      <label>{label}</label>
      <SelectForm
        className="input-select"
        data={months}
        onChange={handleMonthChange}
        value={months[date.month]}
      />
      <span> / </span>
      <SelectForm
        className="input-select"
        data={Array.from({ length: totalDays }, (_, i) => i + 1)}
        onChange={handleDayChange}
        value={date.day}
      />
      <span> / </span>
      <SelectForm
        className="input-select"
        data={getAllYears}
        onChange={handleYearChange}
        value={date.year}
      />
    </div>
  );
}
