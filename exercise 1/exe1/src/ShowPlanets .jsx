const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

export default function ShowPlanets(){
    return (
        <>
        <ul>
        {
            planets.map((item, index)=>{
             return <li key={index}>  {item}</li>
            })
        }
        </ul>
        </>
    )
}