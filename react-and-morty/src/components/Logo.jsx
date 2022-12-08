import './Logo.css';

const Logo = (props) => {
  return (
    <div className="logo">
      <a href="https://www.youtube.com/watch?v=82F25MrlC9c">
        <img
          className={props.small ? 'smaller' : ''}
          src="../images/rick-and-morty-31013.png"
          alt="Rick and Morty logo"
        />
      </a>
    </div>
  );
};

export default Logo;
