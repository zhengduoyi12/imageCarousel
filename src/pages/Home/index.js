import './index.scss';
import { ImageCard } from '@/components/imageCard';
import { useState, useEffect,useMemo } from 'react';
import { loadIndex } from '@/utils/load';
import { useImageList } from '@/hooks/useImageList';

function App() {
    const { imageList } = useImageList();
    const [currentIndex, setCurrentIndex] = useState(0)
    //load 3 pic [current-1, current, current+1] 
    const calculation = useMemo(() => loadIndex(currentIndex,imageList.length), [currentIndex,imageList.length]);
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
        }, 15000)
        return () => {
            clearInterval(timer)
        }
    })

    return (

        <div className="image-slider">
            {imageList.map((item, index) =>
                <ImageCard props={item} key={item.id} current={currentIndex === index} loadArray={calculation} index={index}/>
            )}
            <i id="prev" className="fa-solid fa-chevron-left" onClick={() => changeIndex(-1)}></i>
            <i id="next" className="fa-solid fa-chevron-right" onClick={() => changeIndex(1)}></i>
        </div>

    )
}
export default App;