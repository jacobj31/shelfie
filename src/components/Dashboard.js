import React from 'react'
import './Product'
import Product from './Product';
import axios from 'axios'

export default class Dashboard extends React.Component{
  

    
    deleteItem = id => {
        axios.delete(`/api/item/${id}`).then(res => {
          this.props.view()
      })
    }

    render(){
        const inventory = this.props.inventory.map(item =>{
            return(
                <Product 
                delete = {this.deleteItem}
                key = {item.id} 
                product= {item}
                onEdit = {this.props.onEdit}
                ></Product>)})
        return(
        <div>
            Dashboard
           {inventory}
        </div>)
    }
}