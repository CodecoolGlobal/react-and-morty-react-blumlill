import './Display.css';

const Display = ({ data, type, visible, setVisible }) => {
  const charater = type === 'characters';

  function changeModal() { 
    setVisible(!visible);
    console.log(visible);
  }

  return (
    <div className={'modal'} style={{display: visible ? 'block' : 'none'}} onClick={() => {changeModal();}}>
      <div className='modal-view'>
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
    </div>
  );
};

export default Display;
