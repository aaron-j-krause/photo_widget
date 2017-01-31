import React from 'react'
import ReactDOM from 'react-dom'

import './global-styles/vendor/reset.css'
import './global-styles/base.scss'

import Album from './components/album'

const reactNode = document.createElement('div')
document.body.insertBefore(reactNode, document.body.firstChild)

function Img(url) {
  const u = url.split('/')
  this.description = u[u.length - 1].split('.')[0]
  this.url = url;
}

let urls = ['http://mercuryanimal.com/wp-content/uploads/2016/09/cute-3.jpg', 'https://s-media-cache-ak0.pinimg.com/236x/3f/3a/b0/3f3ab086803b388f72d592cb5c90ceac.jpg', 'https://s-media-cache-ak0.pinimg.com/originals/53/48/06/534806dcd6a370c5ba89f2c9c9cc07ed.jpg']

urls = [...urls, ...urls, ...urls]
ReactDOM.render(<Album images={urls.map(u => new Img(u))} />, reactNode)

