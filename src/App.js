
import './App.css';
import './styles/Main.css'
import Header from './pages/Header';
import MainCard from './pages/MainCard';
import MainContent from './pages/MainContent';
import Footer from './pages/Footer';
import Aside from './pages/Aside';
function App() {
  return (
   <div className='App'>
       <Header />
      <div className='Main-Mid'>
       <Main  /> 
       <AsideGroup />
      </div>
       <Footer />
   </div>
  );
}

function AsideGroup(){
  return(
    <div className='aside-group'>
      <Aside news='This Free Streaming Service Is Exploding in Popularity, Topping Max' imageURL='https://static01.nyt.com/images/2024/08/07/business/TUBI-billboard/TUBI-billboard-superJumbo.jpg?quality=75&auto=webp'/>
      <Aside news='Gwen Walz, the Coolheaded, Ultracompetent Political Spouse' imageURL='https://static01.nyt.com/images/2024/08/12/multimedia/12GWEN-WALZ-cjqf/12GWEN-WALZ-cjqf-superJumbo.jpg?quality=75&auto=webp'/>
      <Aside news='An Italian Nobleman’s Villa Is Restored to Its Former Glory' imageURL='https://static01.nyt.com/images/2024/08/09/t-magazine/09tmag-etro-slide-WG4Z/09tmag-etro-slide-WG4Z-superJumbo.jpg?quality=75&auto=webp'/>
      <Aside news='In the Fierce Lobster Roll Rivalry, There Are Only Winners' imageURL='https://static01.nyt.com/images/2024/08/14/multimedia/10Lobster-Rolls1-zgjw/09Lobster-Rolls1-zgjw-superJumbo.jpg?quality=75&auto=webp'/>
      <Aside news='Kolkata doctor rape-murder case: How the incident unfolded, what we know so far' imageURL='https://i.ytimg.com/vi/uvneqza9HdI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAbEEkLW9ZDwBer9yaIx5FV5B7vmw'/>
    </div>
  );
}


function Main(){
  return(
    <div className='Main'>
       <MainContent />
       <MainCard 
        title="Kolkata doctor rape-murder case: How the incident unfolded, what we know so far" 
         content={"The tragic rape and murder of the female trainee doctor at Kolkata’s R G Kar Medical College and Hospital have drawn nationwide outrage, leading to protests by junior doctors who have halted work to demand justice for the victim."}
         imageURL={"https://i.ytimg.com/vi/uvneqza9HdI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAbEEkLW9ZDwBer9yaIx5FV5B7vmw"}
        />
            <MainCard 
        title="Deception and a Gamble: How Ukrainian Troops Invaded Russia" 
         content={"Planned in secrecy, the incursion was a bold move to upend the war’s dynamics and put Moscow on the defensive — a gambit that could also leave Ukraine exposed."}
         imageURL={"https://static01.nyt.com/images/2024/08/13/multimedia/13ukraine-russia-incursion-03-mckt/13ukraine-russia-incursion-03-mckt-superJumbo.jpg?quality=75&auto=webp"}
        />
            <MainCard 
        title="Japan’s Leader, Fumio Kishida, Will Step Down" 
         content={"The unpopular prime minister bowed to pressure within his party, which has been searching for a potential successor. He is expected to leave office next month."}
         imageURL={"https://static01.nyt.com/images/2024/08/14/multimedia/14japan-kishida-01-lkcj/14japan-kishida-01-lkcj-superJumbo.jpg?quality=75&auto=webp"}
        />
            <MainCard 
        title="Can This Country Show Europe How to Compete Again?" 
         content={"A central square in Stockholm, with people walking across it and some water fountains in the distance. Loulou d'Aki for The New York Times"}
         imageURL={"https://static01.nyt.com/images/2024/08/05/multimedia/00sweden-econ-01-qcmg/00sweden-econ-01-qcmg-superJumbo.jpg?quality=75&auto=webp"}
        />
    </div>
  );
}


export default App;
