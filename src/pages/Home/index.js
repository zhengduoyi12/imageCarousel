import './index.scss';
import { ImageCard } from '@/components/imageCard';
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
    return (

        <div className="image-slider">
            {imageList.map(item =>
                <ImageCard props={item} key={item.id}/>
            )}
            {/* <div id="prev">1 </div> */}
            <i id="prev" class="fa-solid fa-chevron-left"></i>
            <i id="next" class="fa-solid fa-chevron-right"></i>
        </div>

    )
}
export default App;