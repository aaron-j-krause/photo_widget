import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import Thumbnail from '../../../src/components/imageWidget/thumbnail'

describe('<Thumbnail />', () => {

  let thumbnail
  beforeEach(() => {
    let testProps = { description: 'test_description', url: 'test_url' }
    thumbnail = shallow(<Thumbnail {...testProps} />)
  })

  it('should pass description to alt for img tag', () => {
    expect(thumbnail).to.have.attr('alt', 'test_description')
  })

  it('should pass url to src for img tag', () => {
    expect(thumbnail).to.have.attr('src', 'test_url')
  })
})
