export default function BuildingALayout({sr,button,title,description}){
    return(
<div className="card m-5">
  <img className="card-img-top" src={sr} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
     {description}
    </p>
    <a href={button.url} className="btn btn-primary">{button.label}</a>
  </div>
</div>
    );
}