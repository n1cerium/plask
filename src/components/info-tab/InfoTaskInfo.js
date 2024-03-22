import InfoBox from "./InfoBox";

export default function InfoTaskInfo({ specificTask }) {
  console.log(specificTask);
  return (
    <InfoBox className="info-task" title="Task Information">
      <section className="info-all-info">
        <span>
          <b>Name: </b> {specificTask.name}
        </span>{" "}
        <br />
        <div>
          <span>
            <b>Description: </b>
          </span>
          <br />
          <span>
            {specificTask.description === ""
              ? "No Comment"
              : specificTask.description}
          </span>
        </div>
      </section>
    </InfoBox>
  );
}
