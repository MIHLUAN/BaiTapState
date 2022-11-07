import React, { Component } from 'react'
import BodyPage from './BodyPage'
import HeaderPage from './HeaderPage'

export default class BaiTap extends Component {
  render() {
    return (
     <>
     <div className='bg-page'>
          <HeaderPage/>
          <BodyPage/>
     </div>
     </>
    )
  }
}
