import React, { PropTypes, Component } from 'react'
import ImageWidget from '../imageWidget'

import styles from './album.scss'

let uid = 0

export default class Album extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let display = e.target.value
    this.setState({display})
  }

  render() {
    let widgets = this.props.images.map(i => (
      <ImageWidget {...i} key={++uid} display={this.state.display} />))
    widgets = this.state.display === 'full' ? widgets.slice(0, 3) : widgets

    return <section className={styles.album}>
            <form onChange={this.handleChange}>
              <label><input type="radio" name="display" value="thumb"/><span>Thumbnail</span></label>
              <label><input type="radio" name="display" value="full"/><span>Fullsize</span></label>
                  <label><input type="radio" name="display" value="text"/><span>Description</span></label>
            </form>
            <ul>{widgets}</ul>
           </section>
  }
 }

Album.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    description: PropTypes.string
  }))
}
