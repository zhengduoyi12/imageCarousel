
const ImageCard = ({ props, current }) => {

    return (
        <div className={current ? 'slide current' : 'slide'}>
            <img src={props.urls.raw} alt={props.alt_description} className="image" />
            < div className="content">
                <h1 className="title">{props.user.instagram_username}</h1>
                <div className="description">{props.description} </div>
            </div>
        </div >
    )
}

export { ImageCard } 