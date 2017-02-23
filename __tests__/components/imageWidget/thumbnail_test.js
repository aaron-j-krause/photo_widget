import React from 'react'
import renderer from 'react-test-renderer'

import Thumbnail from '../../../src/components/imageWidget/thumbnail'

test('should render correctly', () => {
  const testProps = { description: 'test_description', url: 'test_url' }
  const thumbnail = renderer.create(<Thumbnail {...testProps} />)
  expect(thumbnail).toMatchSnapshot()
})
