const Display = ({ data, type }) => {
  const charater = type === 'characters';

  return (
    <div className="modal">
      <p>Name: {data.name}</p>
      {charater ? (
        <>
          <p>Species: {data.species}</p>
          <p>Gender: {data.gender}</p>
          <p>Status: {data.status}</p>
          <p>Location: {data.location.name}</p>
          <p>Appeared in {data.episode.length} episodes</p>
        </>
      ) : (
        <>
          <p>Type: {data.type}</p>
          <p>Dimension: {data.dimension}</p>
          <p>Residents: {data.residents.length}</p>
        </>
      )}
    </div>
  );
};

export default Display;
