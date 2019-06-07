import React from 'react';
import axios from 'axios'
import './App.css';
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Header from './components/Header'
import {HashRouter} from 'react-router-dom'


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      list : [],
      product: null
    }
  }

  componentDidMount () {
      axios.get('/api/inventory').then(res => {
        this.setState({
          list: res.data
        })
      })
  }
  onEdit = item => {
    this.setState({
      product: item
    })
  }

  render(){
  return (
    <HashRouter>
    <div className="App">
    <Header/>
    <Dashboard view = {this.componentDidMount} onEdit = {this.onEdit} inventory = {this.state.list}/>
    <Form view = {this.componentDidMount} product = {this.state.product} />
     
    </div>
    </HashRouter>
  )};
}

export default App;
