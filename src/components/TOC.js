import React, {Component} from 'react';

class TOC extends Component{
    render(){
        var lists = [];
        var data = this.props.data
        var i = 0;
        while(i < data.length){
            lists.push(
                <p key={data[i].id}></p>
            )
            i = i + 1;
        }
        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}