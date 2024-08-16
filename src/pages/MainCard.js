import '../styles/MainContent.css'


export default function MainCard({title, content, imageURL}){
  return(
    <div>
        <Card title={title} content={content} imageURL={imageURL}/>
        <br />
        <hr className='hrk2' />
    </div>
  );
}


function Card({title, content, imageURL}) {
  return (
    <div className="card">

    <div className="card-news-grp">
      <div className="card-news">
     <span className="card-news-title"> {title}</span>
        <br />
        <br />
     {content}
        <br />
        <span className="spc"> 5 min read</span>
      </div>
</div>
        <div className="img" >
        <img src={imageURL} alt="sef"/>
      </div>
    </div>
  );
 }
