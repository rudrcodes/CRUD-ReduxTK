import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Cake } from "./features/cake/Cake";
import { AnotherCake } from "./components/AnotherCake";
import { UserView } from "./features/users/UserView";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <AnotherCake />
      <br />
      <hr style={{ width: "400px" }} />
      <Cake />
      <hr style={{ width: "400px" }} /> */}
      <h1>CRUD in REDUX-TK</h1>
      <UserView />
    </div>
  );
}

export default App;
