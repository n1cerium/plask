export default function InfoBox({ className, title, children }) {
  return (
    <main className={className}>
      <h2>{title}</h2>
      {children}
    </main>
  );
}
