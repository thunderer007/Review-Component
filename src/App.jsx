import { useState } from "react";
import "./App.css";
import { data } from "./data";
import Review from "./Review";

function App() {
  const [people, setPeople] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <Review
        people={people}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}

export default App;
