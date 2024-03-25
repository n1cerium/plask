import InfoBox from "./InfoBox";

export default function InfoTaskInfo({ specificTask }) {
  return (
    <InfoBox className="info-task" title="Task Information">
      <section className="info-all-info">
        <span>
          <b>Name: </b> {specificTask.name}
        </span>
        <span>
          <b>Category: </b> {specificTask.category}
        </span>
        <div>
          <span>
            <b>Description: </b>
          </span>
          <span>
            {specificTask.description === ""
              ? "No Comment"
              : specificTask.description}
          </span>
        </div>
        <span>
          <b>Priority: </b> {specificTask.priorityLevel}
        </span>
        <span>
          <b>Time Allocated: </b> {specificTask.allocatedTime} minutes
        </span>
        <span>
          <b>Due Date: </b> {specificTask.endDate}
        </span>
      </section>
    </InfoBox>
  );
}
