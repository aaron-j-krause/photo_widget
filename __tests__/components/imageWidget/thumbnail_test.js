import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import Thumbnail from '../../../src/components/imageWidget/thumbnail'

chai.use(chaiEnzyme())

let thumbnail
beforeEach(() => {
  let testProps = { description: 'test_description', url: 'test_url' }
  thumbnail = shallow(<Thumbnail {...testProps} />)
})

test('should pass description to alt for img tag', () => {
  expect(thumbnail).to.have.attr('alt', 'test_description')
})

test('should pass url to src for img tag', () => {
  expect(thumbnail).to.have.attr('src', 'test_url')
})
