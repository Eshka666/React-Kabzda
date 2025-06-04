import "./App.css";

function App() {
  return (
    <div>
      <AppTitle />
      <Rating />
      <Accordion />
      <Rating />
    </div>
  );
}

function Rating() {
  return (
    <>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </>
  );
}

function Star() {
  console.log("Star rendered");
  return <div>Star</div>;
}

function AppTitle() {
  return <div>This is APP component</div>;
}

function Accordion() {
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
