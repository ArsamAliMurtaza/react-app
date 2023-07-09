import Video from "./components/Video";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>Hello</div>
      <Video
        title="React JS Video"
        views="10k"
        channel="ArsamDev"
        time="1 year ago"
      ></Video>
      <Video
        title="NextJs Video"
        views="100k"
        channel="ArsamDev"
        time="2 year ago"
      ></Video>
      <Video
        title="MERN Video"
        views="10M"
        channel="ArsamDev"
        time="5 hours ago"
      ></Video>
    </div>
  );
}

export default App;
