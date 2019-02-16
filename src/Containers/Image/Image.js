import React, { useState } from 'react'
import { PIXABAY_URL, PIXABAY_KEY } from "../../Config/config";
import axios from 'axios';
import { ProgressiveImage } from "../../Components/Utils";
import ImageForm from './ImageForm';
export default function Image(props) {
  const [imageState, setImages] = useState({ isFetching: false, images: [] });
  const [query, setQuery] = useState('')

  /**
   * onChange event set query on input change
   */
  function onChange({ target: { value } }) {
    setQuery(value)
  }

  /**
   * call pixabay api
   */
  function getImages() {
    setImages({ ...imageState, isFetching: true })
    axios.get(`${PIXABAY_URL}${PIXABAY_KEY}&q=${query}`)
      .then(res => {
        console.log(res)
        setImages({ ...imageState, isFetching: false, images: res.data.hits })
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <ImageForm onChange={onChange} onSubmit={getImages} value={query} /><br />
      {imageState.isFetching && <p>fetching images ...</p>}
      {imageState.images && imageState.images.map((image, i) => {
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
