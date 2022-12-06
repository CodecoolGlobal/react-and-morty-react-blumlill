export default function Card({ data, type }) {
  const charater = type === 'characters';
  return (<div className="Card">
    {charater && <img src={data.image} alt={data.name}></img>}
    <p>Name: {data.name}</p>
    {charater && <p>Species: {data.species}</p>}
    {!charater && <p>Type: {data.type}</p>}
  </div>
  );
}