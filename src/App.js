import logo from "./logo.svg";
import "./App.css";

const Person = () => {
  return (
    <>
      <h1>Name: Wandu</h1>
      <h2>Surname: Mathunjwa</h2>
      <h3>Age: 34</h3>
    </>
  );
};

const App = () => {
  const name = "Wandu";
  const isNameShowing = true;

  return (
    <div className="App">
      <Person />
    </div>
  );
};

export default App;
