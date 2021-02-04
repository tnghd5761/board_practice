import React, {Component} from 'react';
import WriteContent from "./components/WriteContent.js"
import Control from "./components/Control.js"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      selected_content_id:2,  
      subject:{title:'WEB', sub:'World Wide Web!'}, 
      welcome:{title:'Welcome', desc:'Hello, React!!'}
    }
  }

  render(){
    return (
      <div className="App">
        <header>
          <h1>Board</h1>
        </header>
        <p><strong>welcome!</strong></p>
        <Control></Control>
      </div>
    );
  }
}

export default App;
