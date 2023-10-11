const Header = () =>{
    return(
        <div id="header">
          <div id="left-side-header">
            <ul style={{ listStyleType: "none" }}>
              <li id="edyoda-text">Edyoda</li>
              <li id="stories-text">Stories</li>
            </ul>
            <span id="explore-categerios">
              Explore Categories
              <i className="fa-solid fa-angle-down down-arrow"></i>
            </span>
          </div>
          <div id="right-side-header">
            <p id="edyoda-description">
              EdYoda is a learning and knowledge <br /> sharing platform for
              techies
            </p>
            <button id="main-website-btn">Go To Main Website</button>
          </div>
        </div>
    )
}

export default Header;


