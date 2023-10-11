import logo from "./logo.svg";
import "./App.css";
import Header from './header.js'
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
      "https://edyoda.s3.amazonaws.com/media/blog-images/6.png",
    title: "LAMP Stack Vs MEAN stack: Choosing the right platform",
    author: "Edyoda ",
    date: "25 Nov 2021",
    text: "In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement. Many organizations around the world that intensely depend on programming for their everyday business.",
  },
  {
   imageSrc:
      "https://edyoda.s3.amazonaws.com/media/blog-images/4.png",
    title: "Impact of Cloud Computing in various industries",
    author: "Edyoda ",
    date: "23 Aug 2023",
    text: "Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud technology as part of their business.",
  },
  {
    imageSrc:
       "https://edyoda.s3.amazonaws.com/media/blog-images/3.png",
     title: "Introduction To Big DATA Analytics",
     author: "Edyoda ",
     date: "23 Aug 2023",
     text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit quos explicabo vero
     dignissimos. Obcaecati molestiae sint reprehenderit magnam laudantium, eaque, necessitatibus
     ullam perferendis debitis nobis, unde velit ex nemo.`,
   },
   {
    imageSrc:
      "https://edyoda.s3.amazonaws.com/media/blog-images/5.png",
    title: "Introduction To Cyber Security",
    author: "Edyoda ",
    date: "23 Aug 2023",
    text: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds. To begin with, one must understand what machine learning is.",
  },
  {
    imageSrc:
      "https://edyoda.s3.amazonaws.com/media/blog-images/7.png",
    title: "Introduction To Data Backup and Recovery",
    author: "Edyoda ",
    date: "23 Aug 2023",
    text: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds. To begin with, one must understand what machine learning is.",
  },
  {
    imageSrc:
      "https://edyoda.s3.amazonaws.com/media/blog-images/7.png",
    title: "Introduction To Data Backup and Recovery",
    author: "Edyoda ",
    date: "23 Aug 2023",
    text: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds. To begin with, one must understand what machine learning is.",
  },
  {
    imageSrc:
       "https://edyoda.s3.amazonaws.com/media/blog-images/6.png",
     title: "LAMP Stack Vs MEAN stack: Choosing the right platform",
     author: "Edyoda ",
     date: "25 Nov 2021",
     text: "In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement. Many organizations around the world that intensely depend on programming for their everyday business.",
   },
   {
    imageSrc:
       "https://edyoda.s3.amazonaws.com/media/blog-images/4.png",
     title: "Impact of Cloud Computing in various industries",
     author: "Edyoda ",
     date: "07 Oct 2023",
     text: "Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud technology as part of their business.",
   }
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-content">
      <Section />
      <div id="container">
      {stories.map((story)=>{
        return (<Main story = {story} />)
      })}
      </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
