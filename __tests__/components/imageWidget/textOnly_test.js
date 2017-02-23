import React from 'react'
import renderer from 'react-test-renderer'
import TextOnly from '../../../src/components/imageWidget/textOnly'

test('Should render description as text', () => {
  const rendered = renderer.create(<TextOnly description="test" />)

  expect(rendered).toMatchSnapshot()
})
