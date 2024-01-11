import './index.scss';
import { ImageCard } from '@/components/imageCard';
import { useState, useEffect } from 'react';
function App() {
    const imageList = [
        {
            id: 1,
            title: 'beijing',
            description: 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHXZCZXCZXCZXCZXCSADKLSJSDFKLAJFLASDFJSDKLAFJSDKAFJASDKLFNSDMAFASD',
            url: 'http://images.pexels.com/photos/1434580/pexels-photo-1434580.jpeg'
        },
        {
            id: 2,
            title: 'shanghai',
            description: '2SD',
            url: 'http://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg'
        },
        {
            id: 3,
            title: 'hangzhou',
            description: '3SD',
            url: 'http://images.pexels.com/photos/597909/pexels-photo-597909.jpeg'
        },
    ]
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