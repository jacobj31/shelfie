import React from 'react'

export default class Product extends React.Component{
    render(props){
        let {name, price, img, id} = this.props.product
        return(
        <div>
            
            {name}
            {price}
            <img src = {img} alt = ''/>
        <button onClick={() => this.props.delete(id)}>Delete</button>
        <button onClick= {() => this.props.onEdit(this.props.product)}>Edit</button>
        </div>)
    }
}