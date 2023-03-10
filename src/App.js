import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainContainer />
      <RightMenu />
      <div className="background"></div>
    </div>
  );
}

export default App;
