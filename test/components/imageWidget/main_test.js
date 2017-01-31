import React from 'react'
import { shallow, render } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import ImageWidget, {
  FullSize, TextOnly, Thumbnail
} from '../../../src/components/imageWidget'

describe('<ImageWidget />', () => {
  let testProps
  before(() => {
    testProps = { url: 'test_url', description:'test_description' }
  })

  it('should render the fullSize component with display of full', () => {
    testProps.display = 'full'
    let imageWidget = shallow(<ImageWidget {...testProps} />)
    let comp = imageWidget.find(FullSize)
    expect(comp).to.exist
  })

  it('should render the textOnly component with display text', () => {
    testProps.display = 'text'
    let imageWidget = shallow(<ImageWidget {...testProps} />)
    let comp = imageWidget.find(TextOnly)
    expect(comp).to.exist
  })

  it('should render the Thumbnnail component with display thumb', () => {
    testProps.display = 'thumb'
    let imageWidget = shallow(<ImageWidget {...testProps} />)
    let comp = imageWidget.find(Thumbnail)
    expect(comp).to.exist
  })

})
