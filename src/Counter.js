import React, { Component } from 'react';
import store from'./store';
//store链接action和reducer的对象
//action是一个对象，描述state的变化,
//reducer定义了如何去响应action描述的state的变化，并发送到store
export default class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter
        }
        //重新渲染页面
        store.subscribe(()=>{   
            this.setState({
                num:store.getState().counter
            })
        })
    }
    handleAdd=()=>{
        let action = {type:'ADD',value:10};
        store.dispatch(action); //dispatch更新
    }
    handleDec=()=>{
        let action = {type:'DEC'};
        store.dispatch(action);
    }
    //奇数则加
    handleAddOdd=()=>{
        if(store.getState().counter % 2 !== 0){
            let action = {type:'ADD',value:1};
            store.dispatch(action);
        }
    }
    //异步
    handleAsy=()=>{
        setTimeout(function(){
            let action = {type:'ADD',value:2};
            store.dispatch(action);
        },1000)
    }
    render() {
        return (
            <div>
                 <p>
                    Clicked: <span>{this.state.num}</span> times
                    <br/>
                    <button onClick={this.handleAdd}>+</button>
                    <button onClick={this.handleDec}>-</button>
                    <br/>
                    <button onClick={this.handleAddOdd}>Increment if odd</button>
                    <br/>
                    <button onClick={this.handleAsy}>Increment async</button>
                </p>
            </div>
        );
    }
}

