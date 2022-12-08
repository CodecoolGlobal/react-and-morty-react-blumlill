import './Loading.css';

export default function Loading({ overlay, parent }) {
  return (
    <div
      className={overlay ? 'loading overlay' : 'loading'}
      style={overlay ? { height: `${parent.getBoundingClientRect().height}px` } : {}}
    >
      <img src="../images/portal.png" alt="Loading" />
      <p>L O A D I N G . . .</p>
    </div>
  );
}
