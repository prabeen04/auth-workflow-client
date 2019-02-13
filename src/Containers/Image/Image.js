import React, { useState, useEffect } from 'react'
import { PIXABAY_URL, PIXABAY_KEY } from "../../Config/config";
import axios from 'axios';

export default function Image(props) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get(`${PIXABAY_URL}${PIXABAY_KEY}&q=react`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  })
  return (
    <>
      <h2>image component</h2>
    </>
  )
}
