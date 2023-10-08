import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import Main from "./Main";
import Section from "./Section";

let stories = [
  {
    imageSrc:
      "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
    title: "Introduction To a Machine Learning Online Course",
    author: "Edyoda ",
    date: "23 Aug 2023",
    text: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds. To begin with, one must understand what machine learning is.",
  },
  {
   imageSrc:
      "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
    title: "Introduction To a Machine Learning Online Course",
    author: "Edyoda ",
    date: "23 Aug 2023",
    text: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds. To begin with, one must understand what machine learning is.",
  },
  {
   imageSrc:
      "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
    title: "Introduction To a Machine Learning Online Course",
    author: "Edyoda ",
    date: "23 Aug 2023",
    text: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds. To begin with, one must understand what machine learning is.",
  },
  {
    imageSrc:
       "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
     title: "Introduction To a Machine Learning Online Course",
     author: "Edyoda ",
     date: "23 Aug 2023",
     text: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds. To begin with, one must understand what machine learning is.",
   },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <div id="container">
      {stories.map((story)=>{
        return (<Main story = {story} />)
      })}
      </div>
   
      <div className="footer"></div>
    </div>
  );
}

export default App;
