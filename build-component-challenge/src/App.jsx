import "./App.css";
import Header from "./Header";
import Post from "./Post";
import ButtonHolder from "./ButtonHolder";

function App() {
  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", width: "80%" }}>
          <div className={"stylePost"}>
            <Post />
            <Post />
            <Post />
          </div>
          <dir className={"styleButton"}>
            <ButtonHolder />
          </dir>
        </div>
      </div>
    </>
  );
}

export default App;
