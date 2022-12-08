import { useRef } from 'react';
import Card from './Card';
import Loading from './Loading';

export default function List({ dataList, type, setCurrentCard, setVisible, loading, infinite }) {
  const listDiv = useRef(null);
  return (
    <div className="list" ref={listDiv}>
      {loading && !infinite && <Loading overlay={true} parent={listDiv.current} />}
      {dataList.map((data) => {
        return (
          <Card
            className="card"
            key={data.id}
            data={data}
            type={type}
            setCurrentCard={setCurrentCard}
            setVisible={setVisible}
          />
        );
      })}
    </div>
  );
}
