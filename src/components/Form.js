import React from 'react'
import axios from 'axios'

export default class Form extends React.Component{
    constructor (props){
        super(props)

        this.state ={
            img : '',
            price : 0,
            name : '',
            editing: false,
           
        }}
        handleChange = e => {
            let {value, name} = e.target
            this.setState({
                [name]:value
            })
        }
        cancel = () => {
            this.setState({
                img : '',
                price : 0,
                name : ''
            })
        }
       
        createItem = () => {
        let {img, price, name} = this.state
        axios.post('api/item', {price:price, img:img, name:name}).then(res => {
            
            this.cancel()
            this.props.view()
            })
        }
        updateProduct = () =>{
            let {img, name, price, id} = this.props.product
            this.setState({ 
                img: img,
                price: price,
                name: name
            })
            axios.put(`/api/item/${id}`, {price:price, img:img, name:name}).then(res =>{
                this.cancel()
            })
        }

    render(){
 

        return(
            
        <div>   
            <input className = 'add' 
            type= 'text'
            name= 'name'
            placeholder='name'
            onChange={this.handleChange}
            value={this.state.name}/>  

             <input className = 'add'
            type= 'text'
            name= 'price'
            placeholder='price'
            onChange={this.handleChange}
            value={this.state.price}        
            />
            <input className = 'add'
            type= 'text'
            name= 'img'
            placeholder='img'
            onChange={this.handleChange}
            value={this.state.img}           
            />
            
            <button onClick = {this.cancel}>Cancel</button>
            
            {this.props.product?
            <button onClick = {this.updateProduct}>Save Changes</button>
            :
            <button onClick = {this.createItem}>Add to Inventory</button>
            }
        </div>)
    
    }
}