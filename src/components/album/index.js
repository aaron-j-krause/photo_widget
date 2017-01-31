import React, { PropTypes, Component } from 'react'
import ImageWidget from '../imageWidget'

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
    let widgets = this.props.images.map(i => <ImageWidget
                                              {...i}
                                              key={++uid}
                                              display={this.state.display}
                                             />)

    return <section>
            <form onChange={this.handleChange}>
              <label><input type="radio" name="display" value="thumb"/>Thumbnail</label>
              <label><input type="radio" name="display" value="full"/>Fullsize</label>
              <label><input type="radio" name="display" value="text"/>Description</label>
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
