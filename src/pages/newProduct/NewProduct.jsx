import React from 'react'
import './newProduct.css'

export default function () {
  return (
    <div className='newProduct'>
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>  
          <input type="file" name="" id="file" />
        </div>  

        <div className="addProductItem">
          <label>Name</label>  
          <input type="text" name="" placeholder='Apple Airpods' />
        </div> 

        <div className="addProductItem">
          <label>Stock</label>  
          <input type="text" name="" placeholder='123' />
        </div> 

        <div className="addProductItem">
          <label>Active</label>  
          <select name="active" id="active">
            <option value="yes">Yes</option>  
            <option value="no">N0</option>
          </select>
        </div>
        <button className="addProductButton">Create</button> 
      </form>
    </div>
  )
}
