import React, { Component } from 'react';
import store from './store';
export default class TodoList extends Component {
    constructor(){
        super();
        //console.log(store.getState());
        this.state={
            list:store.getState().todo.list
        }
        store.subscribe(()=>{
            this.setState({
                list:store.getState().todo.list
            })
        })
    }
    handleAdd=(e)=>{
        if(e.keyCode===13){
            store.dispatch({
                type:'add_item',
                value:e.target.value
            })
            e.target.value='';
        }       
    }
    handleDel=()=>{
        store.dispatch({
            type:'del_item',
            delvalue:e.target.value
        })
    }
    render() {
        return (
            <div>
                <input onKeyDown={this.handleAdd} type="text"/><br/>
                <ul>
                    {this.state.list.map((item,index)=>(
                        <li key={index}>{item}
                        <button onClick={this.handleDel} value={index}>删除</button></li>
                    ))}
                </ul>
            </div>
        )
    }
}


