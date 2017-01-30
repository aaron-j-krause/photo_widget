import React, { PropTypes } from 'react'
import styles from './imageWidget.css'

export default function Thumbnail({ url, description }) {
  return (<img className={styles.thumbnail} src={url} alt={description} />)
}

Thumbnail.propTypes = {
  url: PropTypes.string,
  description: PropTypes.string
}
