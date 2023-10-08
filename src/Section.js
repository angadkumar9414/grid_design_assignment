function Section(){
    return(
        <div className="section">
        <div className="trend-head">
            <h1>Trending Posts</h1>
        </div>
        <div className="filter-div">
            <svg fill="#3580c1" width="35px" height="35px" viewBox="0 0 1.05 1.05" version="1" xmlns="http://www.w3.org/2000/svg"><path d="M0.831 0.262H0.219c-0.048 0 -0.061 0.026 -0.026 0.061l0.184 0.184c0.035 0.035 0.061 0.101 0.061 0.149v0.219l0.175 -0.087v-0.153c0 -0.035 0.026 -0.092 0.061 -0.127l0.184 -0.184c0.035 -0.035 0.022 -0.061 -0.026 -0.061z"/></svg>
            <span id="filter-head">Filter By Category</span>
        </div>
        <div className="buttons">
            <button className="btns" id="btn-all">All</button>
            <button className="btns">Artificial Intelligence</button>
            <button className="btns">Cloud Computing</button>
            <button className="btns">DevOps</button>
            <button className="btns">Programming Langauges</button>
            <button className="btns">Mobile Application Development</button>
            <button className="btns">Technology and Tools</button>
            <button className="btns">Get a Job in a Tech Company</button>
            <button className="btns">Others</button>
        </div>
    </div>
    );
}

export default Section;