import React from 'react'
import renderer from 'react-test-renderer'

import FullSize from '../../../src/components/imageWidget/fullSize'

const testProps = { description: 'test_description', url: 'test_url' }

test('FullSize snapshot', () => {
  const rendered = renderer.create(<FullSize {...testProps} />)

  expect(rendered).toMatchSnapshot()
})
