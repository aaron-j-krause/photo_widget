import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import ImageWidget from './components/imageWidget'
import Album from './components/album'

const IMAGE_URL = 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
const IMAGE_DESCRIPTION = 'A cute bunny ok?'
const reactNode = document.createElement('div')
document.body.insertBefore(reactNode, document.body.firstChild)

function Img(url) {
  let u = url.split('/')
  this.description = u[u.length - 1].split('.')[0]
  this.url = url
}

let urls = ['http://mercuryanimal.com/wp-content/uploads/2016/09/cute-3.jpg', "https://s-media-cache-ak0.pinimg.com/236x/3f/3a/b0/3f3ab086803b388f72d592cb5c90ceac.jpg", "https://s-media-cache-ak0.pinimg.com/originals/53/48/06/534806dcd6a370c5ba89f2c9c9cc07ed.jpg"]

ReactDOM.render(<Album images={urls.map(u => {return new Img(u)})} />, reactNode)

