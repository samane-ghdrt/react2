const animals = [
    { label: 'Horse' },
    { label: 'Turtle' },
    { label: 'Elephant' },
    { label: 'Monkey' },
  ];


export default function MapingArrayObjectsToLi(){
   
    return(
       <ul>
         {animals.map((item,index)=>{
      return <li key={index}>{item.label}</li>}
        )}
       </ul>
    );
}