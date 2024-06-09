import InfoBox from "./InfoBox";

export default function InfoHome({ quote, task }) {
  return (
    <InfoBox className="info-task" title="Daily Quote And Tasks">
      <section id="info-home">
        <div id="info-home-quote">
          <h3>Quote of the day</h3>
          <p>{quote.content}</p>
          <p>- {quote.author}</p>
        </div>
        <div id="upcoming-task">
          <h3>Upcoming Tasks</h3>
          {task !== undefined &&
            task.map((t) => (
              <div id="info-task">
                <span>{t.name}</span> <span>{t.endDate}</span>
              </div>
            ))}
        </div>
      </section>
    </InfoBox>
  );
}
