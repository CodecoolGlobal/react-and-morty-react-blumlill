import './InfiniteScroll.css';

const InfiniteScroll = (props) => {
  return (
    <div className={null === props.results ? 'hidden' : ''}>
      <span>Infinite scrolling</span>
      <input
        type="checkbox"
        onChange={() => {
          props.setInfinite(!props.infinite);
          props.setResults([]);
          props.setFetchType({ ...props.fetchType, page: 1 });
        }}
        checked={props.infinite}
      />
    </div>
  );
};
export default InfiniteScroll;
