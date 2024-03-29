import React, { useState } from 'react';
import { Empty } from "antd";
import { PIXABAY_URL, PIXABAY_KEY } from "../../Config/config";
import axios from 'axios';
import { ProgressiveImage } from "../../Components/Utils";
import { CircularLoader } from "../../Components/Loaders";
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
  function getImages(e) {
    e.preventDefault()
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
      {imageState.isFetching && <div style={{textAlign: 'center'}}><CircularLoader /></div>}
      {!imageState.isFetching && !imageState.images.length && <div style={{textAlign: 'center'}}><Empty description='No images'/></div>}
      <div className={imageState.isFetching && 'blur'}style={{ margin: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
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
      </div>
    </>
  )
}
