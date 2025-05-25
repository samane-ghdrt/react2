export default function PokeCard({title,descrip,src}){
    return (
        <>
  <div className="col">
    <div className="card text-center">
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <img  className="card-img-top" src={src} alt={title}/>
        <p className="card-text">{descrip}</p>
      </div>
    </div>
  </div>
        </>
    )
}