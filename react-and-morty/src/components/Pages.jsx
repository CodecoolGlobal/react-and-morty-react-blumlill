export default function Pages({ pageCount, currentPage, onPageChange }) {
  const pagesToDisplay = [currentPage];
  console.log("First " + pagesToDisplay);
  if (currentPage > 1) {
    pagesToDisplay.unshift(currentPage - 1);
  }
  if (currentPage > 2) {
    pagesToDisplay.unshift(currentPage - 2);
  }
  if (currentPage < pageCount) {
    pagesToDisplay.push(currentPage + 1);
  }
  if (currentPage < pageCount - 1) {
    pagesToDisplay.push(currentPage + 2);
  }
  console.log("Second " + pagesToDisplay);
  while (pagesToDisplay.length < 5) {
    if (pagesToDisplay.includes(1)) {
      pagesToDisplay.push(pagesToDisplay[pagesToDisplay.length - 1] + 1);
    } else if (pagesToDisplay.includes(pageCount)) {
      pagesToDisplay.unshift(pagesToDisplay[0] - 1);
    }
    console.log("Third " + pagesToDisplay);
  }
  return (
    <div className="pages">
      Current:{currentPage}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}>
        {'|<'}
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        {'<'}
      </button>
      {pagesToDisplay.map(page => {
        return <button key={page} className={page === currentPage ? "active" : ""} onClick={() => onPageChange(page)}>{page}</button>;
      })}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pageCount}>
        {'>'}
      </button>
      <button onClick={() => onPageChange(pageCount)}
        disabled={currentPage === pageCount}>
        {'>|'}
      </button>
    </div>
  );
}
