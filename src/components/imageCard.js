import { useState } from "react"
const ImageCard = ({ props, current,loadArray,index }) => {
    const [trigger, setTrigger] = useState(false)
    const changeTrigger = () => {
        setTrigger(!trigger)
    }
    return (
        <div className={current ? 'slide current' : 'slide'}>
            <img src={loadArray.includes(index) ? props.urls.raw : ''} alt={props.alt_description} className="image" onClick={() => changeTrigger()}/>
            {
                trigger &&
                < div className="content">
                    <h1 className="title">{props.user.location}</h1>
                    <div className="description">{props.description} </div>
                </div>
            }
        </div >
    )
}

export { ImageCard } 