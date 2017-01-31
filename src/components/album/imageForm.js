import React, { PropTypes } from 'react'
import styles from './album.scss'

export default function ImageForm({ error, newImage }) {
  const { hidden } = styles
  const urlError = error === 'url' || null
  const imgError = error === 'img' || null

  return (
    <form onSubmit={newImage}>
      <input type="text" name="url" placeholder="url" required />
      <input type="text" name="description" placeholder="description" required />
      <button type="submit">New Image</button>
      <span className={urlError || hidden}>Please Enter Something That Looks Like A URL</span>
      <span className={imgError || hidden} >Link to jpg, jpeg, png, gif only</span>
    </form>
  )
}

ImageForm.propTypes = {
  error: PropTypes.string,
  newImage: PropTypes.func
}
