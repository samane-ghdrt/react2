import PokeCard from './Pokecard'

{
  pokemon: [
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
}

export default function pokemon (){
    return(
        <>
         <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-around">
        <PokeCard title={PokeCard[0].name} descrip={PokeCard[0].type} src={PokeCard[0].image}/>
        <PokeCard title={PokeCard[1].name} descrip={PokeCard[1].type} src={PokeCard[1].image}/>
        <PokeCard title={PokeCard[2].name} descrip={PokeCard[2].type} src={PokeCard[2].image}/>
        <PokeCard title={PokeCard[3].name} descrip={PokeCard[3].type} src={PokeCard[3].image}/>
        <PokeCard title={PokeCard[4].name} descrip={PokeCard[4].type} src={PokeCard[4].image}/>
        </div>
        </>
    )
}
