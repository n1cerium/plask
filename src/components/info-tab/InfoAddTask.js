import { useState } from "react";
import SelectForm from "../SelectForm";

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

export default function AddTask({ onAddTasks, specificDate }) {
  const clickedDateSplit = specificDate.split(" ");
  let fullDate;
  if (specificDate === "") {
    fullDate = {
      month: new Date().getMonth(),
      day: new Date().getDate(),
      year: new Date().getFullYear(),
    };
  } else {
    fullDate = {
      month: months.indexOf(clickedDateSplit[0]),
      day: Number(clickedDateSplit[1].substring(0, 2)),
      year: Number(clickedDateSplit[2]),
    };
  }
  console.log(clickedDateSplit);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priorityLevel, setPriorityLevel] = useState(1);
  const [startDate, setStartDate] = useState({ ...fullDate });
  const [endDate, setEndDate] = useState({ ...fullDate });
  const [error, setError] = useState({});

  const tempEndDate = new Date(endDate.year, endDate.month, endDate.day);
  const endFullDate = new Date(endDate.year, endDate.month, endDate.day);

  function handleAddTask() {
    const tempStartDate = new Date(
      startDate.year,
      startDate.month,
      startDate.day
    );
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);

    setError((err) => ({
      nameErr: name ? "" : "The name should not be empty",
      categoryErr: category ? "" : "The category should not be empty",
      pastDateErr:
        tempStartDate < todayDate
          ? "The start date must be today or later"
          : "",
      endDateErr:
        tempEndDate < tempStartDate
          ? "The end date must be today or later than today's date"
          : "",
    }));
    if (
      error.nameErr !== "" ||
      error.categoryErr !== "" ||
      error.pastDateErr !== "" ||
      error.endDateErr !== ""
    ) {
      return;
    }

    onAddTasks((allTasks) =>
      allTasks.map((t) => {
        const taskDate = t.date.split(" ");
        const taskMonth = months.indexOf(taskDate[0]);
        const taskDay = Number(taskDate[1].substring(0, 2)); // getting the day from the task date and remove the comma
        const taskYear = Number(taskDate[2]); // getting the year from the task date
        const taskCurrentDate = new Date(taskYear, taskMonth, taskDay);

        if (taskCurrentDate <= endFullDate) {
          const newTask = {
            id: t.tasks.length + 1,
            name: name,
            description: description,
            category: category,
            priorityLevel: priorityLevel,
            status: "Upcoming",
            endDate: `${months[endDate.month]} ${endDate.day}, ${endDate.year}`,
            willDelete: false,
          };
          return { ...t, tasks: [...t.tasks, newTask] };
        }
        return t;
      })
    );
  }
  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDesc(e) {
    setDescription(e.target.value);
  }
  function handleChangeCate(e) {
    setCategory(e.target.value);
  }
  return (
    <main id="info-add-task">
      <h2>Adding a Task</h2>
      <section id="info-add-task-input">
        <InputForm label="Name:" value={name} onChange={handleChangeName} />
        <InputForm
          label="Description:"
          value={description}
          onChange={handleChangeDesc}
          placeholder="Optional..."
        />
        <InputForm
          label="Category:"
          value={category}
          onChange={handleChangeCate}
        />
        <div id="input-priority">
          <label>Priority Level: </label>
          <SelectForm
            className="input-select"
            data={Array.from({ length: 5 }, (_, i) => i + 1)}
            onChange={(e) => setPriorityLevel(e.target.value)}
            value={priorityLevel}
          />
        </div>
        <DateForm
          label="Start Date: "
          date={startDate}
          onChangeDate={setStartDate}
        />
        <DateForm label="Due Date: " date={endDate} onChangeDate={setEndDate} />
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
      </div>
      <button id="input-button-add" onClick={handleAddTask}>
        Add This Task
      </button>
    </main>
  );
}
function InputForm({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label>{label}</label> <br />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
function DateForm({ label, date, onChangeDate }) {
  const totalDays = new Date(date.year, date.month + 1, 0).getDate();
  function handleMonthChange(e) {
    onChangeDate((d) => ({
      ...d,
      month: months.indexOf(e.target.value),
    }));
  }
  function handleDayChange(e) {
    onChangeDate((d) => ({
      ...d,
      day: e.target.value,
    }));
  }
  function handleYearChange(e) {
    onChangeDate((d) => ({
      ...d,
      year: e.target.value,
    }));
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
