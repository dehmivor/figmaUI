import CreatorUI from "./components/CreatorUI";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatorUI2 from "./components/CreatorUI2";
import ReadingTaskUI from "./components/ReadingTaskUI";
import ReadingTask from "./components/ReadingTask";
import ReadingTaskUI2 from "./components/ReadingTaskUI2";
import ReadingTaskUI3 from "./components/ReadingTaskUI3";
import CreatorUI1 from "./components/CreatorUI1";
import Column1 from "../components/Column1";
import Column2 from "../components/Column2";
import Column3 from "../components/Column3";
import Column4 from "../components/Column4";
import Column5 from "../components/Column5";
import Column6 from "../components/Column6";

function App() {
  return (
    <>
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
      <Column5 />
      <Column6 />
      <CreatorUI />
      <CreatorUI1 />
      <CreatorUI2 />
      <ReadingTaskUI />
      <ReadingTask />
      <ReadingTaskUI2 />
      <ReadingTaskUI3 />
    </>
  );
}

export default App;
