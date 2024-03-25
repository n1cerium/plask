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

const weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function toDate(dateStr) {
  const dateSplit = dateStr.split(" ");
  const taskMonth = months.indexOf(dateSplit[0]);
  const taskDay = Number(dateSplit[1].substring(0, 2)); // getting the day from the task date and remove the comma
  const taskYear = Number(dateSplit[2]); // getting the year from the task date
  const taskCurrentDate = new Date(taskYear, taskMonth, taskDay);

  return taskCurrentDate;
}

//this function will return the date and the day of the week
export function getDate(dayToAdd) {
  const today = new Date();

  today.setDate(today.getDate() + dayToAdd);

  let month = today.getMonth();
  let day = today.getDate();
  let year = today.getFullYear();
  let dayWeek = today.getDay();

  return {
    date: `${months[month]} ${day}, ${year}`,
    dayOfTheWeek: weeks[dayWeek],
  };
}
