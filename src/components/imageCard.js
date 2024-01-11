
const ImageCard = ({ props, current }) => {

    return (
        <div className={current ? 'slide current' : 'slide'}>
            <img src={props.url} alt="" className="image" />
            < div className="content">
                <h1 className="title">{props.title}</h1>
                <div className="description">{props.description} </div>
            </div>
        </div >
    )
}

export { ImageCard } 