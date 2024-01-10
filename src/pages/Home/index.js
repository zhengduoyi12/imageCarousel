import './index.scss';

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
                <div className="slide current">
                    <img src={item.url} alt='' className="image" />

                    < div className="content">
                        <h1 className="title">{item.title}</h1>
                        <div className="description">{item.description} </div>
                    </div>

                </div >
            )}
            <div id="prev">1 </div>
            <div id="next">2</div>
        </div>

    )
}
export default App;