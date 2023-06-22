import "./index.css";

export function Description({ elm }) {
  return (
    <section className="sec-data">
      <h3 className="data-author">@{elm.author}</h3>
      <p className="data-desc">{elm.description}</p>
    </section>
  );
}
