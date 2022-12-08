import './Buttons.css';

const Buttons = (props) => {
  const charClicked = props.characters;
  const locClicked = props.locations;
  return (
    <div className="buttons">
      <button
        onClick={() => {
          charClicked();
        }}
        className="characters"
        type="submit"
        disabled={props.fetchtype.type === 'characters'}
      >
        C H A R A C T E R S
      </button>
      <button
        onClick={() => {
          locClicked();
        }}
        className="locations"
        type="submit"
        disabled={props.fetchtype.type === 'locations'}
      >
        L O C A T I O N S
      </button>
    </div>
  );
};

export default Buttons;
