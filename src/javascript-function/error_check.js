export function isValidData(data) {
  let errors = {
    nameErr: "",
    categoryErr: "",
    endDateErr: "",
    pastDateErr: "",
    allocatedErr: "",

    isError: false,
  };

  if (data.name === "") {
    errors.nameErr = "The name should not be empty";
    errors.isError = true;
  }
  if (data.category === "") {
    errors.categoryErr = "The category should not be empty";
    errors.isError = true;
  }
  if (data.allocatedTime === 0) {
    errors.allocatedErr = "A task should have allocated time > 0";
    errors.isError = true;
  }
  if (isValidStartDate(data.startDate)) {
    errors.pastDateErr = "The start date must be today or later";
    errors.isError = true;
  }
  if (isValidEndDate(data.startDate, data.endDate)) {
    errors.endDateErr = "Invalid Due Date";
    errors.isError = true;
  }

  return errors;
}

function isValidStartDate(date) {
  const tempStartDate = new Date(date.year, date.month, date.day);
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);

  return tempStartDate < todayDate;
}

function isValidEndDate(startDate, endDate) {
  const endFullDate = new Date(endDate.year, endDate.month, endDate.day);
  const tempStartDate = new Date(
    startDate.year,
    startDate.month,
    startDate.day
  );

  return endFullDate < tempStartDate;
}
