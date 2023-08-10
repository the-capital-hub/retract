import "./FeatureCard.scss";

function FeatureCard({ img, title, desc }) {
  return (
    <div
      className={`feature-card position-absolute m-1 rounded-5 bg-black px-3 py-4 text-white d-flex gap-3`}
    >
      <img src={img} alt={title} />
      <div className="d-flex flex-column flex-grow-1">
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
