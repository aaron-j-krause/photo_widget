import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import TextOnly from '../../../src/components/imageWidget/textOnly'

describe('<TextOnly />', () => {
  let textOnly

  beforeEach(() => {
    let testProps = {
      description: 'test'
    }

    textOnly = shallow(<TextOnly {...testProps} />)
  })

  it('Should render description as text', () => {
    expect(textOnly).to.have.text('test')
  })
})
