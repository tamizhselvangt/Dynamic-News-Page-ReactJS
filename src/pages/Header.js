import "../styles/Header.css"
import { FaAngleDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

export default function Header(){

  return(
<div className="header">
<HeaderTop />
<HeaderMid />
<HeaderBottom />

<HorizontalLine />

</div>
  );



}

function HorizontalLine() {
  return(
  <div className="hr" >
    <hr  />
    <hr />
  </div>
  );
  }
function HeaderBottom(){
  return(
    <div className="header-bottom">

 
    <div className="category-group">
   
      <div className="dropdown">
           <div className="category ">U.S 
                 <span className="down-arrow"><FaAngleDown /></span>

           </div>
           <DropDown />
      </div>

      <div className="dropdown">

      <div className="category "> World 
              <span className="down-arrow"><FaAngleDown /></span>
      </div>
      <DropDown />
      </div>

      <div className="dropdown">


      <div className="category">Business 
             <span className="down-arrow"> <FaAngleDown /></span>
      </div>
      <DropDown />
      </div>

      <div className="dropdown">
           <div className="category">Arts 
         <span className="down-arrow"> <FaAngleDown /></span>
           </div>
           <DropDown />
         </div>

      <div className="dropdown"> 
      <div className="category">Lifestyle<span className="down-arrow"> <FaAngleDown /></span></div>
      <DropDown />
      </div>
     
      <div className="dropdown"> 
      <div className="category">Opinion <span className="down-arrow"> <FaAngleDown /></span></div>
      <DropDown />
      </div>
     
      <div className="dropdown">
      <div className="category">Audio <span className="down-arrow"> <FaAngleDown /></span></div>
      <DropDown />
      </div>
     
      <div className="dropdown">
      <div className="category">Games<span className="down-arrow"><FaAngleDown /></span></div>
      <DropDown />
      </div>
     
      <div className="dropdown cat">
      <div className="category">Cooking <span className="down-arrow"> <FaAngleDown /></span></div>
      <DropDown />
      </div>
     
      <div className="dropdown">
      <div className="category">WirCutter <span className="down-arrow"> <FaAngleDown /></span></div>
      <DropDown />
      </div>
     
      <div className="dropdown">
      <div className="category">TheAthletic <span className="down-arrow"> <FaAngleDown /></span></div>
      <DropDown />
      </div>
    

    </div>

  
    </div>
  );
}


function DropDown(){
  return(
  <div class="dropdown-content"> 
    <div class="row">
      <div class="column">
  <div className="drop-down-title">Sections</div>
  <div className="list">
    <div className="list-item">U.S.</div>
    <div className="list-item">Politics</div>
    <div className="list-item">New York</div>
    <div className="list-item">California</div>
    <div className="list-item">Education</div>
    <div className="list-item">Health</div>
    <div className="list-item">Obituaries</div>
    <div className="list-item">Science</div>
    <div className="list-item">Climate</div>
    <div className="list-item">Weather</div>
    <div className="list-item">Sports</div>
    <div className="list-item">Business</div>
    <div className="list-item">Tech</div>
    <div className="list-item">The Upshot</div>
    <div className="list-item">The Magazine</div>
</div>

      </div>
      <div class="column">
      <div className="drop-down-title">U.S.Politics</div>
<div className="list">
    <div className="list-item">2024 Elections</div>
    <div className="list-item">Primary Results</div>
    <div className="list-item">Supreme Court</div>
    <div className="list-item">Congress</div>
    <div className="list-item">Biden Administration</div>
</div>

      </div>

      <div className="column">
      <div className="drop-down-title">Columns</div>
<div className="list">
    <div className="list-item">36 Hours</div>
    <div className="list-item">Ask Well</div>
    <div className="list-item">The Hunt</div>
    <div className="list-item">Modern Love</div>
    <div className="list-item">Where to Eat</div>
    <div className="list-item">Vows</div>
    <div className="list-item">Social Q’s</div>
    <div className="list-item">The Ethicist</div>
</div>

      </div>
    </div>
  </div>);
}


function HeaderMid(){
  return( <div className="header-mid">
   <div>
   <div className="date">
      {getDate()}
      <br />
      <div className="today">
      <a href="https://www.nytimes.com/section/todayspaper">Today's Paper</a>
      </div>   
   </div>

   <div className="menu-icon">
        <IoMenu />
   </div>
    </div>
    <a  href="https://www.nytimes.com/"><div className="title" >Day  Today</div></a>
    <div className="special">S&P 500
<span className="special-2">+0%</span>
</div>
   </div>);
}
function HeaderTop(){
  return(<div className="header-top">
     
    <svg className="search-icn" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
   </svg>
   <div></div>
   <div className="language-grp">
   <span  className="lang">U.S</span>
   <span className="lang bold">INTERNATIONAL</span>
   <span className="lang">CANADA</span>
   <span className="lang">ESPAÑOL</span>
   <span className="lang">中文</span>
   
   </div>
   <div className="btn-group">
     <button>PREMIUM</button>
     <button>LOG IN</button>
   </div>
</div>);
}


function getDate(){
  // Create a new Date object
const today = new Date();

// Options to format the date
const options = { 
    weekday: 'long',    // full name of the day (e.g., "Tuesday")
    year: 'numeric',    // full year (e.g., "2024")
    month: 'long',      // full name of the month (e.g., "August")
    day: 'numeric'      // day of the month (e.g., "13")
};

// Format the date using toLocaleDateString
const formattedDate = today.toLocaleDateString('en-US', options);

// Output the formatted date
return formattedDate;

}
