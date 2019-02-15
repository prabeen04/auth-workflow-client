import React, { useState, useEffect, useContext } from 'react'
import { PIXABAY_URL, PIXABAY_KEY } from "../../Config/config";
import axios from 'axios';
import { ProgressiveImage } from "../../Components/Utils";
import ImageForm from './ImageForm';
import { QueryContext } from "./ImageForm";
export default function Image(props) {
  const [imageState, setImages] = useState({ isFetching: false, images: [] });
  const { query } = useContext(QueryContext)
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
      <ImageForm />
      <QueryContext.Consumer>
        {(value) => <p>{value}</p>}
      </QueryContext.Consumer>
      <p>{query}</p>
      {imageState.isFetching && <p>fetching images ...</p>}
      {imageState.images && imageState.images.map((image, i) => {
        // return <img src={image.previewURL} height={100} width={100}/>
        return (
          <ProgressiveImage
            key={i}
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
