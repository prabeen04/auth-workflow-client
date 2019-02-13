import React, { useState, useEffect } from 'react'
import { PIXABAY_URL, PIXABAY_KEY } from "../../Config/config";
import axios from 'axios';

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
      <h2>image component</h2>
      {imageState.isFetching && <p>fetching images ...</p>}
    </>
  )
}
