import { Accordion } from "./components/Accordion/Accordion";
import "./App.css";
import OnOff from "./components/OnOff/OnOfff";
import { Rating, RatingValuePropsType } from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import { useState } from "react";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValuePropsType>(0);

  return (
    <div className="App">
      <Rating value={ratingValue} onClick={setRatingValue} />
      <UncontrolledRating />
      {/* <OnOff />
      <UncontrolledAccordion titleValue={"Menu"} />
      <UncontrolledAccordion titleValue={"Users"} />
      <UncontrolledRating /> */}
      {/* <Accordion titleValue={"Menu"} collapsed={true} />
      <Accordion titleValue={"Users"} collapsed={false} /> */}
      {/* <PageTitle title={"This is APP component"} />
      <PageTitle title={"My friends"} />
      Article 1
      <Rating value={3} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} /> */}
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}

export default App;
