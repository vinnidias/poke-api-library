import style from './style.css'



function CardPreView({img}) {
    return (
        <div className="card-preview">
            <img src={img}/>
        </div>
    )
}