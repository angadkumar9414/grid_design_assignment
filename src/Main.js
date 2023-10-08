function Main(props){
   let story = props.story
    return(
        <div className="itemcard">
        <div className="imagesection"><img className="itemimg"
                src={story.imageSrc}
                alt=""/></div>
        <div className="textsection">
            <p className="title">{story.title}</p>
            <div className="authorcontainer">
                <span className="author">{story.author} <b style={{fontWeight: 500,color: 'black'}}>|</b></span>
                <span className="date">{story.date}</span>
            </div>

            <div className="text">
                <p>{story.text}</p>
            </div>
        </div>
    </div>
    );
}

export default Main;