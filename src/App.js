import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const name = "Wandu";
  const isNameShowing = true;

  return (
    <div className="App">
      <h1>Hello, {2 + 2}!</h1>
      {isNameShowing ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>{"There is no name here"}</h1>
        </>
      )}
    </div>
  );
};

export default App;
