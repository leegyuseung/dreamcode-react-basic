import "./App.css";

function App() {
  const name = "James";
  const list = ["우유", "딸기", "바나나", "요거트"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul style={{ width: "200px" }}>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
