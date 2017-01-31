import React from 'react'
import { shallow, render } from 'enzyme'
import ImageWidget from '../../src/components/imageWidget'
import { expect } from 'chai'

describe('<ImageWidget />', () => {
  let testProps
  before(() => {
    testProps = { url: 'test_url', description:'test_description' }
  })

  it('should render a the fullSize component with display of full', () => {
    testProps.display = 'full'
    let imageWidget = render(<ImageWidget {...testProps} />)
    let img = imageWidget.find('img')

    expect(img.prop('src')).to.equal('test_url')
  })
})
