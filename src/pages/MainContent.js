
import "../styles/MainContent.css"



export default function MainContent(){
  return(
    <div className="main-content">
        <div className="main">
          <Card />
          <hr className="hrk2"/>
          {/* <vr /> */}
        </div>
    </div>
  );
}



function Card() {
  return (
    <div className="card">

    <div className="card-news-grp">
      <div className="card-news">
     <span className="card-news-title"> Israel Was Less Flexible in Recent Gaza Cease-Fire Talks, Documents Show</span>
        <br />
        <br />
        Prime Minister Benjamin Netanyahu has denied trying to block a deal, but documents reviewed by The Times show he has added conditions to Israel’s demands.
        <br />
        <span className="spc"> 4 min read</span>
      </div>
      <hr  className="hrk"/>
      <div className="card-news">
     <span className="card-news-title">    Gazans Describe Dire Conditions in Shrinking ‘Humanitarian Zone’</span>
   <br />
   <br />
   An area where Israel has directed thousands of civilians to go has become a “hell” where food and water are scarce, according to the displaced people there.
        <br />

       <span className="spc"> 4 min read</span>
        </div>
</div>
        <div className="img" >
        {/* <iframe mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" width="560" height="420" frameborder="0" src="/videodash.cms?autostart=1&msid=112549717&tpname=embed_video&rlvideo=81582957"></iframe> */}
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/UlIwE0x4OLo?si=Qfjp-wNMybevqlUq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        <img src="https://static01.nyt.com/images/2024/08/13/multimedia/13Israel-ceasefire-bibi-wplc/13Israel-ceasefire-bibi-wplc-superJumbo.jpg?quality=75&auto=webp" alt="sef"/>
      </div>
    </div>
  );
 }
