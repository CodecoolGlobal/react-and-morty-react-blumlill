export default function Card({ data, type, setCurrentCard }) {
  const charater = type === 'characters';
  const source = charater ? data.image : `../images/r&m_loc${Math.ceil(Math.random() * 8)}.png`;
  return (<div className="Card" onClick={() => setCurrentCard(data)}>
    <img src={source} alt={data.name}></img>
    <p>Name: {data.name}</p>
    {charater && <p>Species: {data.species}</p>}
    {!charater && <p>Type: {data.type}</p>}
  </div>
  );
}
