import '../styles/Aside.css'

export default function Aside({news, imageURL}){
  return(
    <div>
     <div className="aside">
     <div className='aside-news'>
    {news}
     <div className='special'>4 min read</div>
      </div>
      <div className='aside-img'>
        <img  src={imageURL} alt='aside-image'/>
      </div>
     </div>
     <hr />
    </div>
  )
}
