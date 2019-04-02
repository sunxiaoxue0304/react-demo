import {combineReducers} from'redux';
let counter= (state=12,action)=>{
    switch(action.type){
        case 'ADD':
            return state+action.value;//参数
        case 'DEC':
            return state-1;
        default:
            return state;
    }
}
let initValue={
    list:[1,2,3]
}
let todo=(state=initValue,action)=>{
    let newState=JSON.parse(JSON.stringify(state));//深度拷贝
    //Object.assign({},state,{a:100})//创建一个新的对象，state的对象    
    switch(action.type){
        case 'add_item':
            newState.list.push(action.value);
            return newState;
        case 'del_item':
            newState.list.splice(action.delvalue,1);
            return newState;
        default:
            return state;
    }
}
export default combineReducers({
    // counter:counter,
    // todo:todo
    counter,todo
})