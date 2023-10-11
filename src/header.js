// function Header(){
//     return(
//         <div className="header">
// <div className="wrap">
//     <div className="logo">
//         <div className="logo-written">EDYODA</div>
//         <p className="para">Stories</p>
//     </div>
//     <div>
//         <div className="drop-down">
//             <p id="para">Explore Categories</p>
//             <span className="material-symbols-outlined">
//                 expand_more
//             </span>
//         </div>
//     </div>
// </div>
// <div className="header-btn">
//     <button>Go To Main Website</button>
// </div>
// </div>
//  )
// }

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


