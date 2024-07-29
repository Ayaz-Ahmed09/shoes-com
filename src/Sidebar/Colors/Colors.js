import React from 'react'
import './Colors.css'
import Input from '../../compounets/Input'
function Colors({handleChange}) {
  return (
    <div>
      <h2 className='sidebar-title color-title'>
        Colors
      </h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="chechkmark all" ></span>All
      </label>
      <Input
      handleChange={handleChange}
      value='Blue'
      title='Blue'
      name='test1'
      color='Blue'
      /> 
       <Input
      handleChange={handleChange}
      value='Black'
      title='Black'
      name='test1'
      color='Black'
      /> 
       <Input
      handleChange={handleChange}
      value='Red'
      title='Red'
      name='test1'
      color='Red'
      /> 
       <Input
      handleChange={handleChange}
      value='Green'
      title='Green'
      name='test1'
      color='Green'
      /> 
       <Input
      handleChange={handleChange}
      value='White'
      title='White'
      name='test1'
      color='White'
      /> 
    </div>
  )
}

export default Colors
