import Card from "./Card";

export default function List({ dataList, type, setCurrentCard }) {
  return (
    <div className="list">
      {dataList.map(data => {
        return <Card key={data.id} data={data} type={type} setCurrentCard={setCurrentCard} />;
      })}
    </div>
  );
}
