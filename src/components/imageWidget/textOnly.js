import React, { PropTypes } from 'react'
import styles from './imageWidget.css'

export default function TextOnly({ description }) {
  return <h4 className={styles.text_only}>{description}</h4>
}

TextOnly.propTypes = {
  description: PropTypes.string
}
