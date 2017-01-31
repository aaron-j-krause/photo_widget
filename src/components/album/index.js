import React, { PropTypes, Component } from 'react'
import ImageWidget from '../imageWidget'
import ImageForm from './imageForm'

import styles from './album.scss'
import genUid from '../../lib/uid'

export default class Album extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: null,
      images: props.images,
      error: null
    }
    this.changeDisplay = this.changeDisplay.bind(this)
    this.newImage = this.newImage.bind(this)
  }

  changeDisplay(e) {
    const display = e.target.value
    this.setState({ display })
  }

  newImage(e) {
    e.preventDefault()
    const t = e.target
    const url = t.url.value
    const description = t.description.value

    const urlIsh = /(www\.)?(\w*\/?)\.\w*/g.test(url)
    const extIsh = /(png|jpg|jpeg|gif)$/g.test(url)
    const error = (!urlIsh && 'url') || (!extIsh && 'img') || null

    if (error) return this.setState({ error })

    this.setState({ error, images: [...this.state.images, { url, description }] })

    t.reset()
  }

  render() {
    const { images, display, error } = this.state
    let widgets = images.map(img => (
      <ImageWidget {...img} key={genUid()} display={display} />))
    widgets = display === 'full' ? widgets.slice(0, 3) : widgets

    return (
      <section className={styles.album}>
        <form onChange={this.changeDisplay}>
          <label htmlFor="thumb">
            <input type="radio" name="display" value="thumb" id="thumb" />
            <span>Thumbnail</span>
          </label>

          <label htmlFor="full">
            <input type="radio" name="display" value="full" id="full" />
            <span>Fullsize</span>
          </label>

          <label htmlFor="description">
            <input type="radio" name="display" value="text" id="description" />
            <span>Description</span>
          </label>
        </form>

        <ImageForm newImage={this.newImage} error={error} />
        <ul>{widgets}</ul>
      </section>
    )
  }
 }

Album.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    description: PropTypes.string
  }))
}
