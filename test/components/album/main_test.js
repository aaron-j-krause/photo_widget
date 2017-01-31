import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import Album from '../../../src/components/album'
import ImageWidget, { FullSize, TextOnly, Thumbnail } from '../../../src/components/imageWidget'

describe('<Album />', () => {
  let album
  beforeEach(() => {
    let testProps = {
      images: [{url: 'test', description:'test'}, {url: 'test', description:'test'}]
    }

    album = shallow(<Album {...testProps} />)
  })

  it('should render a widget for each image in props', () => {
    expect(album).to.have.exactly(2).descendants(ImageWidget)
  })

  it('should change display on form change', () => {
    album.find('form').simulate('change', { target: {value: 'thumb'} })
    expect(album).to.have.state('display', 'thumb')
  })
})
