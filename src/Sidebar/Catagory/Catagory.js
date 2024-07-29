import React from "react";
import "./Catagory.css";
import Input from "../../compounets/Input";
function Catagory({handleChange}) {
  return (
    <div>
      <h2 className="sidebar-title">category</h2>
      <div>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value='' name="test"/>
        <span className="chechkmark"></span>All

      </label>
      <Input
      handleChange={handleChange}
      value='sneakers'
      title='sneakers'
      name='test'
      />
      <Input
      handleChange={handleChange}
      value='flats'
      title='Flats'
      name='test'
      />
      <Input
      handleChange={handleChange}
      value='sandals'
      title='sandals'
      name='test'
      />
      <Input
      handleChange={handleChange}
      value='heels'
      title='Heels'
      name='test'
      />
      </div>
    </div>
  );
}

export default Catagory;
