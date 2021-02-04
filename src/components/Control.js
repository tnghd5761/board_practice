import React, {Component} from 'react';
class Control extends Component {
    render(){
      console.log('Subject render');
      return (
        <ul>
          <li><a href="/write" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('write');
          }.bind(this)}>write</a></li>
        </ul>
      );
    }
  }

  export default Control;