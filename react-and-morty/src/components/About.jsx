import './About.css';

const About = (props) => {
  return (
    <div className={props.hidden ? 'hidden' : 'about'}>
      <div>
        <p>Greetings, fellow Rick and Morty fan!</p>

        <p>
          On this website, you can find all the locations and characters in Rick <br />
          and Morty, with some general info about them. Happy browsing! ...BURP!
        </p>
      </div>
    </div>
  );
};

export default About;
