export default function Card({ data, type }) {
  const charater = type === 'characters';
  let source = charater ? data.image : `../images/r&m_loc${Math.ceil(Math.random() * 8)}.png`;
  return (<div className="Card">
    <img src={source} alt={data.name}></img>
    <p>Name: {data.name}</p>
    {charater && <p>Species: {data.species}</p>}
    {!charater && <p>Type: {data.type}</p>}
  </div>
  );
}
