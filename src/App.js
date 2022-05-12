import React, {Component} from 'react';
import './App.css';
import UserInput from './component/userinput/userinput';
import UserOutput from './component/useroutput/useroutput';



class App extends Component {
  constructor() {
    super();
    this.state = {
      username: 'superman'
    }
  }
  userCahneHandler = (event)=> {
    this.setState({username: event.target.value})
  }
  render() {

    return (
      <div className="App">
        <h2>Heloo react</h2>
        <UserInput changed={this.userCahneHandler} currentName ={this.state.username}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Jamoliddin"/>
      </div>
    );
  }
}


export default App;
