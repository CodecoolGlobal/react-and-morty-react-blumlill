import './Loading.css';

export default function Loading({ height }) {
  return (
    <div className="loading" style={{ height: height }}>
      <img src="../images/portal.png" alt="Loading" />
      <p>L O A D I N G . . .</p>
    </div>
  );
}
