import React, { useState, useEffect } from 'react'
import { PIXABAY_URL, PIXABAY_KEY } from "../../Config/config";
import axios from 'axios';
import { ProgressiveImage } from "../../Components/Utils";
export default function Image(props) {
  const [imageState, setImages] = useState({ isFetching: false, images: [] });
  useEffect(() => {
    setImages({ ...imageState, isFetching: true })
    axios.get(`${PIXABAY_URL}${PIXABAY_KEY}&q=react`)
      .then(res => {
        console.log(res)
        setImages({ ...imageState, isFetching: false, images: res.data.hits })
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      {imageState.isFetching && <p>fetching images ...</p>}
      {imageState.images && imageState.images.map(image => {
        // return <img src={image.previewURL} height={100} width={100}/>
        return (
          <ProgressiveImage
            preview={image.previewURL}
            image={image.largeImageURL}
            width={200}
            height={200}
          />
        )
      })}
    </>
  )
}
