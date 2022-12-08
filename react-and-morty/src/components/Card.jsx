export default function Card({ data, type, setCurrentCard, setVisible }) {
  const charater = type === 'characters';
  const source = charater ? data.image : `../images/r&m_loc${data.image}.png`;
  return (
    <div
      className="card"
      onClick={() => {
        return setCurrentCard(data), setVisible(true);
      }}
    >
      <img src={source} alt={data.name}></img>
      <div>
        <p id="name">{data.name}</p>
      </div>
      {charater && (
        <div>
          <p>Species: {data.species}</p>
        </div>
      )}
      {!charater && (
        <div>
          <p>Type: {data.type}</p>
        </div>
      )}
    </div>
  );
}
