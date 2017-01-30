import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import ImageWidget from './components/imageWidget'

const IMAGE_URL = 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
const IMAGE_DESCRIPTION = 'A cute bunny ok?'
const reactNode = document.createElement('div')
document.body.insertBefore(reactNode, document.body.firstChild)

ReactDOM.render(<ImageWidget
                  url={IMAGE_URL}
                  description={IMAGE_DESCRIPTION}
                  display={'full'}
                />, reactNode)

