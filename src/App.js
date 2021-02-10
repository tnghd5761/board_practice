import React, {Component} from 'react';
import boardContent from "./boardContent";
import boardList from "./boardContent/boardList";
import writePage from "./writePage";
import {writing} from "./boardContent/data.json";
import './App.css';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      member : "",
      title : "",
      t_main : "",
      writing : writing
    };
  }
  memberChangeHandler = e => {
    this.setState({
      member: e.target.value
    });
  };
  titleChangeHandler = e => {
    this.setState({
      title: e.target.value
    });
  };
  tmainChangeHandler = e => {
    this.setState({
      t_main: e.target.value
    });
  };
  onSubmitHandler = () => {
    const newArr = this.state.writing.concat({
      no : this.state.writing.length + 1,
      member : this.state.member,
      title : this.state.title,
      t_main : this.state.t_main
    });
    this.setState({writing : newArr});
  };
  
  render(){
    return (
      <Router>
        <div className="App">
          <boardList writing={this.state.writing}/>
          <ul>
            <strong>BoardSH</strong>
            <header>
              <Link to="/writing">
                <button>board list</button>
              </Link>
            </header>
          </ul>
          <main>
            <Switch>
              <Route path="/writing" component={boardContent} />
              <Route path="/writePage" component={writePage} />
            </Switch>
            <writePage
              onMemberChange={this.memberChangeHandler}
              onTitleChange={this.titleChangeHandler}
              onTmainChange={this.tmainChangeHandler}
              newMemeber={this.state.member}
              newTitle={this.state.title}
              newTmain={this.state.t_main}
            />
          </main>
        </div>
      </Router>
    );
  }
}
export default App;
