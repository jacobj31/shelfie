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
            current: null
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
        componentDidUpdate (prevProps) {
            console.log(prevProps.product)
            this.setState({
                current: this.props.product
            })
            
            
        }
        createItem = () => {
        let {img, price, name} = this.state
        axios.post('api/item', {price:price, img:img, name:name}).then(res => {
            
            this.cancel()
            this.props.view()
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
            
            {this.state.editing?
            <button>Save Changes</button>
            :
            <button onClick = {this.createItem}>Add to Inventory</button>
            }
        </div>)
    
    }
}