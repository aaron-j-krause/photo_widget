import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import Album from '../../../src/components/album'
import ImageWidget, { FullSize, TextOnly, Thumbnail } from '../../../src/components/imageWidget'

chai.use(chaiEnzyme())
let album
beforeEach(() => {
  const testProps = {
    images: [{ url: 'test', description: 'test' }, { url: 'test', description: 'test' }]
  }

  album = shallow(<Album {...testProps} />)
})

test('should render a widget for each image in props', () => {
  expect(album).to.have.exactly(2).descendants(ImageWidget)
})

test('should change display on form change', () => {
  album.find('form').simulate('change', { target: {value: 'thumb'} })
  expect(album).to.have.state('display', 'thumb')
})
