
const ImageCard = ({ props }) => {
   
    return (
        <div className='slide current'>
            <img src={ props.url } alt="" className="image"  />
                < div className="content">
                    <h1 className="title">{props.title}</h1>
                    <div className="description">{props.description} </div>
                </div>
        </div >
    )
}

export { ImageCard } 