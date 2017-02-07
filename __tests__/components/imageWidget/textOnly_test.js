import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import TextOnly from '../../../src/components/imageWidget/textOnly'

chai.use(chaiEnzyme())

let textOnly

beforeEach(() => {
  const testProps = {
    description: 'test'
  }

  textOnly = shallow(<TextOnly {...testProps} />)
})

test('Should render description as text', () => {
  expect(textOnly).to.have.text('test')
})
