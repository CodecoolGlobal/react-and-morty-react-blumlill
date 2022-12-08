import './Pages.css';

export default function Pages({ pageCount, currentPage, onPageChange, scrollTo }) {
  function pageTurn(page) {
    if (page !== currentPage) {
      if (scrollTo) {
        const positionY = window.scrollY + scrollTo.getBoundingClientRect().top;
        console.log(positionY);
        window.scroll({ top: positionY, behavior: 'smooth' });
      }
      onPageChange(page);
    }
  }

  const pagesToDisplay = [currentPage];
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
  while (pagesToDisplay.length < 5) {
    if (pagesToDisplay.includes(1)) {
      pagesToDisplay.push(pagesToDisplay[pagesToDisplay.length - 1] + 1);
    } else if (pagesToDisplay.includes(pageCount)) {
      pagesToDisplay.unshift(pagesToDisplay[0] - 1);
    }
  }
  return (
    <div className="pages">
      <div className="button-box">
        <div>
          <button className="page-button" onClick={() => pageTurn(1)} disabled={currentPage === 1}>
            <img src="../images/first.svg" alt="first page" />
          </button>
        </div>
        <div>
          <button className="page-button" onClick={() => pageTurn(currentPage - 1)} disabled={currentPage === 1}>
            <img src="../images/prev.svg" alt="first page" />
          </button>
        </div>
        <div className="number-box">
          {pagesToDisplay.map((page) => {
            return (
              <div
                key={page}
                className={page === currentPage ? 'page-number active' : 'page-number'}
                onClick={() => pageTurn(page)}
                disabled={page === currentPage}
              >
                {page}
              </div>
            );
          })}
        </div>
        <div>
          <button
            className="page-button"
            onClick={() => pageTurn(currentPage + 1)}
            disabled={currentPage === pageCount}
          >
            <img src="../images/next.svg" alt="first page" />
          </button>
        </div>
        <div>
          <button className="page-button" onClick={() => pageTurn(pageCount)} disabled={currentPage === pageCount}>
            <img src="../images/last.svg" alt="first page" />
          </button>
        </div>
      </div>
    </div>
  );
}
