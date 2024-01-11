import './index.scss';
import { ImageCard } from '@/components/imageCard';
import { useState, useEffect } from 'react';
import { getImageListAPI } from '@/apis/image';
function App() {
    const [imageList, setImageList] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const changeIndex = (num) => {
        let res = currentIndex + num
        if (res < 0) {
            setCurrentIndex(imageList.length - 1)
            return
        }
        if (res > imageList.length - 1) {
            setCurrentIndex(0)
            return
        }
        else {
            setCurrentIndex(res)
            return
        }
    }
    useEffect(() => {
        const timer = setInterval(() => {
            changeIndex(1)
        }, 5000)
        return () => {
            clearInterval(timer)
        }
    })
    const getImageList = async () => {
        const res = await getImageListAPI();
        setImageList(res.data)
    }
    useEffect(() => {
        getImageList()
    }, [])

    return (

        <div className="image-slider">
            {imageList.map((item, index) =>
                <ImageCard props={item} key={item.id} current={currentIndex === index} />
            )}
            <i id="prev" class="fa-solid fa-chevron-left" onClick={() => changeIndex(-1)}></i>
            <i id="next" class="fa-solid fa-chevron-right" onClick={() => changeIndex(1)}></i>
        </div>

    )
}
export default App;