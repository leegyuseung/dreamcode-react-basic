import "./App.css";

function App() {
  const name = "James";
  return (
    <>
      <h1 className="orange">Hello!</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul style={{ width: "200px" }}>
        <li>우유</li>
        <li>딸기</li>
        <li>바나나</li>
      </ul>
    </>
  );
}

export default App;
