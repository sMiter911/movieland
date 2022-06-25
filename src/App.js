import logo from "./logo.svg";
import "./App.css";

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Surname: {props.lastName}</h2>
      <h3>Age: {props.age}</h3>
    </>
  );
};

const App = () => {
  const name = "Wandu";
  const isNameShowing = true;

  return (
    <div className="App">
      <Person name={"Wandu"} lastName={"Mathunjwa"} age={34} />
      <Person name={"Sakhile"} lastName={"Mathunjwa"} age={20} />
    </div>
  );
};

export default App;
