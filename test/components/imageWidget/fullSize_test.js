import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import FullSize from '../../../src/components/imageWidget/fullSize'

describe('<FullSize />', () => {

  let fullSize
  beforeEach(() => {
    let testProps = { description: 'test_description', url: 'test_url' }
    fullSize = shallow(<FullSize {...testProps} />)
  })

  it('should pass description to alt for img tag', () => {
    expect(fullSize).to.have.attr('alt', 'test_description')
  })

  it('should pass url to src for img tag', () => {
    expect(fullSize).to.have.attr('src', 'test_url')
  })
})
