import PokeCard from './Pokecard'

 const pokemon= [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ];


export default function Pokedex (){
    return(
        <>
         <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-around">
        <PokeCard title={pokemon[0].name} descrip={pokemon[0].type} src={pokemon[0].image}/>
        <PokeCard title={pokemon[1].name} descrip={pokemon[1].type} src={pokemon[1].image}/>
        <PokeCard title={pokemon[2].name} descrip={pokemon[2].type} src={pokemon[2].image}/>
        <PokeCard title={pokemon[3].name} descrip={pokemon[3].type} src={pokemon[3].image}/>
        <PokeCard title={pokemon[4].name} descrip={pokemon[4].type} src={pokemon[4].image}/>
        </div>
        </>
    );
};
