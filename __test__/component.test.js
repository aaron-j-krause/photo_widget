import React, { Component } from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

const Comp = ({ xt }) => (
  <h1>{xt}</h1>
)

test('componnnennt', () => {
  let wrapper = shallow(<Comp txt='idk'/>)
  expect(wrapper.find('h1').text()).toBe('idk')
})

test('other commmponent', () => {
  let t = renderer.create(
    <Comp txt="boo" /> 
  )

  expect(t).toMatchSnapshot()
})
