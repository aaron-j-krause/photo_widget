import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import ImageWidget, {
  FullSize, TextOnly, Thumbnail
} from '../../../src/components/imageWidget'

chai.use(chaiEnzyme())

const testProps = { url: 'test_url', description: 'test_description' }

test('should render the fullSize component with display of full', () => {
  testProps.display = 'full'
  const imageWidget = shallow(<ImageWidget {...testProps} />)
  const comp = imageWidget.find(FullSize)

  expect(comp).to.exist
})

test('should render the textOnly component with display text', () => {
  testProps.display = 'text'
  const imageWidget = shallow(<ImageWidget {...testProps} />)
  const comp = imageWidget.find(TextOnly)

  expect(comp).to.exist
})

test('should render the Thumbnnail component with display thumb', () => {
  testProps.display = 'thumb'
  const imageWidget = shallow(<ImageWidget {...testProps} />)
  const comp = imageWidget.find(Thumbnail)

  expect(comp).to.exist
})
