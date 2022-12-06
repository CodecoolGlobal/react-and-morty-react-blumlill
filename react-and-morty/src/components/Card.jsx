export default function Card({ data }) {
  return (<div className="Card">
    <p>Name: {data.name}</p>
  </div>
  );
}