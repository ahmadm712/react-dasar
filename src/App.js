import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Header from "./components/navbar";

function App() {
  const firstName = "Ahmad";
  const lastName = "Muji";
  const allStudent = ["Ahmad", "Ahmad2", "ahmad3"];
  const listItem = allStudent.map((e) => {
    return (
      <ul>
        <li>{e}</li>
      </ul>
    );
  });
  const onClickCoba = () => {
    alert(`Holla ${firstName} ${lastName}`);
  };

  let stopLamp = "red";
  let message;
  // if (stopLamp === 'yellow') {
  //   message = <h1>Slow Down</h1>;
  // }else if(stopLamp === "red"){
  //   message = <h1>Stop</h1>;

  // }else if(stopLamp === "green"){
  //   message = <h1>Go</h1>;
  // }else{
  //   message = <h1>Caution, Uknown</h1>;
  // }
  switch (stopLamp) {
    case "yellow":
      message = <h1>Slow Down</h1>;
      break;
    case "red":
      message = <h1>Stop</h1>;
      break;

    case "green":
      message = <h1>Go</h1>;
      break;

    default:
      message = <h1>Caution, Uknown</h1>;
      break;
  }
  const width = "500px";
  const urlImg =
    "https://pluang-production-financial-content.s3.ap-southeast-1.amazonaws.com/2020/09/apa-itu-random-simple.jpg";

  const styleImg = {
    padding: "10px",
    borderRadius: "24px",
  };
  return (
    <div className="App">
      {/* 
    <div class"blabla"></div>
     */}
      <Navbar />
      {message}
      {allStudent.map((e) => {
        return (
          <ul>
            <li>{e}</li>
          </ul>
        );
      })}
      <img src={urlImg} style={{ borderRadius: 18 }} width={width} />
      <button onClick={onClickCoba}>Coba Klik saya</button>
      <Footer />
    </div>
  );
}

export default App;
