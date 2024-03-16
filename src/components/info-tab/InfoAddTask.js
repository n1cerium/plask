import { useState } from "react";

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
// const getAllDaysInMonth = (month, year) =>
//   Array.from(
//     { length: new Date(year, month + 1, 0).getDate() }, // get next month, zeroth's (previous) day
//     (_, i) => new Date(year, month, i + 1) // get current month (0 based index)
//   );
const getAllYears = Array.from(
  { length: 11 },
  (_, i) => new Date().getFullYear() + i
);
export default function AddTask() {
  const todayMonth = new Date().getMonth();
  const todayDay = new Date().getDate();
  console.log("ds: " + todayDay);
  const [startDate, setStartDate] = useState({
    month: todayMonth,
    day: todayDay,
    year: 2024,
  });
  const [endDate, setEndDate] = useState({
    month: todayMonth,
    day: todayDay,
    year: 2024,
  });

  return (
    <main id="info-add-task">
      <h2>Add a Task</h2>
      <section id="info-add-task-input">
        <div id="input-name">
          <label>Name: </label> <br />
          <input type="text"></input>
        </div>
        <div id="input-description">
          <label>Description: </label>
          <br />
          <textarea />
        </div>
        <div id="input-priority">
          <label>Priority Level: </label>
          <select>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <DateForm
          label="Start Date: "
          date={startDate}
          onChangeDate={setStartDate}
        />
        <DateForm label="Due Date: " date={endDate} onChangeDate={setEndDate} />
      </section>
    </main>
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
  console.log(totalDays);
  return (
    <div className="input-date">
      <label>{label}</label>
      <select value={months[date.month]} onChange={handleMonthChange}>
        {months.map((m) => (
          <option value={m}>{m}</option>
        ))}
      </select>
      <span> / </span>
      <select value={date.day} onChange={handleDayChange}>
        {Array.from({ length: totalDays }, (_, i) => i + 1).map((d) => (
          <option value={d}>{d}</option>
        ))}
      </select>
      <span> / </span>
      <select>
        {getAllYears.map((y) => (
          <option value={y}>{y}</option>
        ))}
      </select>
    </div>
  );
}
