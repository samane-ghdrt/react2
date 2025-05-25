 import Alert from './Alert'
 import BuildingALayout from './Building-a-layout'
import MapingArrayObjectsToLi from './Maping-array-object-to-li';
import ShowPlanets from './ShowPlanets ';
import Pokedex from './Pokedex'
 const data = {
    image: '../../.learn/assets/Dylan.png?raw=true',
    cardTitle: 'Bob Dylan',
    cardDescription:
      'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
    button: {
      url: 'https://en.wikipedia.org/wiki/Bob_Dylan',
      label: 'Go to wikipedia',
    },
  };

export default function App(){
return(
    <>
<Alert text="OMG! Something really bad has happened!" />
<BuildingALayout sr={data.image} button={data.button} title={data.cardTitle} description={data.cardDescripti0on}/>
<MapingArrayObjectsToLi/>
<ShowPlanets/>
<Pokedex/>

</>
);
}