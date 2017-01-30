import React, { Component, PropTypes } from 'react'

import FullSize from './fullSize'
import Thumbnail from './thumbnail'
import TextOnly from './textOnly'

export default class ImageWidget extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { url, description, display } = this.props
    const displayOptions = {
      full: <FullSize url={url} description={description} />,
      thumb: <Thumbnail url={url} description={description} />,
      text: <TextOnly description={description} />
    }

    return (
      <div>
        {displayOptions[display]}
      </div>
    )
  }
}

ImageWidget.propTypes = {
  url: PropTypes.string,
  description: PropTypes.string,
  display: PropTypes.string
}
