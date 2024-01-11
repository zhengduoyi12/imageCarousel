import { useEffect, useState } from 'react';
import { getImageListAPI } from '@/apis/image';
function useImageList() {
    const [imageList, setImageList] = useState([])
    const getImageList = async () => {
        const res = await getImageListAPI();
        setImageList(res.data)
    }
    useEffect(() => {
        getImageList()
    }, [])

    return {
        imageList
    }
}

export { useImageList }