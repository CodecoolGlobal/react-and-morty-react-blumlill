import { useState } from 'react';
import './Buttons.css';

const Buttons = (props) => {
  const charClicked = props.characters;
  const locClicked = props.locations;
  const [clicked, setClicked] = useState({ locations: false, characters: false });
  return (
    <div className="buttons">
      <button
        onClick={() => {
          charClicked();
          setClicked({ locations: false, characters: true });
        }}
        className="characters"
        type="submit"
        disabled={clicked.characters}
      >
        C H A R A C T E R S
      </button>
      <button
        onClick={() => {
          locClicked();
          setClicked({ characters: false, locations: true });
        }}
        className="locations"
        type="submit"
        disabled={clicked.locations}
      >
        L O C A T I O N S
      </button>
    </div>
  );
};

export default Buttons;
