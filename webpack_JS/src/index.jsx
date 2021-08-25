// 66
import * as $ from 'jquery'
// 16
import Post from "@models/Post"
// 35
import '@/styles/styles.css'
// 38
import json from "@/assets/json"
// 40
import WebpackLogo from '@/assets/webpack-logo.png'
// 146
import React from 'react'
import {render} from 'react-dom'
// 121
import './babel'
// 56
import xml from '@/assets/data.xml'
// 59
import csv from '@/assets/data.csv'
// 104
import './styles/less.less'
// 115
import './styles/scss.scss'
// 5
const post = new Post('Webpack Post title', WebpackLogo)
// 66-1 and 74
$('pre').addClass('code').html(post.toString())
// 146-1
const App = () => (
  <div className="container">
    <h1>Webpack</h1>
    <hr />
    {/*45*/}
    <div className="logo" />
    <hr />
    {/*66*/}
    <pre />
    <hr />
    {/*105*/}
    <div className="box">
      <h2>Less</h2>
    </div>
    {/*116*/}
    <div className="card">
      <h2>Scss</h2>
    </div>
  </div>
)
render(<App/>, document.getElementById('app'))
// console.log('Post to string: ', post.toString())
// 38-1
// console.log('JSON: ', json)
// console.log('XML: ', xml)
// console.log('CSV: ', csv)