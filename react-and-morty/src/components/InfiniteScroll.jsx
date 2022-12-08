import './InfiniteScroll.css';

const InfiniteScroll = (props) => {
  return (
    <div className={null === props.results ? 'hidden inf-scroll' : 'inf-scroll'}>
      <span>s c r o l l i n g: </span>
      <label className="toggle">
        <input
          type="checkbox"
          onChange={() => {
            props.setInfinite(!props.infinite);
            props.setResults([]);
            props.setFetchType({ ...props.fetchType, page: 1 });
          }}
          checked={props.infinite}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};
export default InfiniteScroll;
