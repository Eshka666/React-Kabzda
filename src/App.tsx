import "./App.css";

function App() {
  debugger;
  return (
    <div>
      {" "}
      This is APP component
      <Rating />
      <Accordion />
    </div>
  );
}

function Rating() {
  debugger;
  return (
    <>
      <div>Star</div>
      <div>Star</div>
      <div>Star</div>
      <div>Star</div>
    </>
  );
}

function Accordion() {
  debugger;
  return (
    <>
      <h3>Menu</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
}

export default App;
