import React, { PropTypes } from 'react'
import styles from './imageWidget.css'

export default function FullSize({ url, description }) {
  return <img className={styles.full_size} src={url} alt={description} />
}

FullSize.propTypes = {
  url: PropTypes.string,
  description: PropTypes.string
}
