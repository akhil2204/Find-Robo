import React ,{Component}from 'react';
import {CardList}  from './components/cardlist/cardlist.components.jsx'
import {SearchBox} from './components/search-box/search-box.components.jsx'
import './App.css';
class App extends Component{
constructor(){
  super();
  this.state = {
   collection:[],
   searchField:''
  }
  // this.handleChange=this.handleChange.bind(this);
  }


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
   .then(user=>this.setState({collection:user}))
}

handleChange=(e)=>{
  this.setState({searchField:e.target.value})
}

  render() {
  
  const {collection,searchField}= this.state;
  const filteredCollection = collection.filter(collection=>
    collection.name.toLowerCase().includes(searchField.toLowerCase()))

      
    return (
      <div className="App">
      
        <h1 className="heading"> ROBO STARS </h1>

      <SearchBox   
       type='search'  
      placeholder ='search Robo'
       handleChange= {this.handleChange}/>
        <CardList collection= {filteredCollection} />
       

        
        

      </div>
    );





}}

export default App;

