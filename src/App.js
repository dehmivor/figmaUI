import "./App.css";
import CreatorUI from "./components/CreatorUI";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatorUI2 from "./components/CreatorUI2";
import ReadingTaskUI from "./components/ReadingTaskUI";
import ReadingTask from "./components/ReadingTask";
import ReadingTaskUI2 from "./components/ReadingTaskUI2";
import ReadingTaskUI3 from "./components/ReadingTaskUI3";

function App() {
  return (
    <>
      <CreatorUI />
      <CreatorUI2 />
      <ReadingTaskUI />
      <ReadingTask />
      <ReadingTaskUI2 />
      <ReadingTaskUI3 />
    </>
  );
}

export default App;
