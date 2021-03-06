import React from 'react';
import { Header, List} from 'semantic-ui-react'
import './App.css';
import axios from 'axios'

class App extends React.Component  {
  state={
    values:[]
  }
  componentDidMount(){
    axios.get("http://localhost:5000/api/values")
    .then((response)=>{
      this.setState({
        values: response.data
      })
    });
    
  }
  render(){
    return (
      <div>
        <Header as='h2' icon='users' content='Reactivities' />
        <List>
        {this.state.values.map((value:any)=>(
          <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
        <ul>
          
        </ul>
      </div>
    );
  }
}
export default App;
