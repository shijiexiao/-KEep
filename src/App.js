import React,{Component} from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import Home from './containers/Home'
const items=[{
    id:1,
    title:"去杰哥的城堡旅游",
    price:200,
    date:"2019-7-12",
    category:{
        id:1,
        name:'旅行',
        type:'outcome',
        iconName:'ios-plane'
    }
},{
    id:2,
    title:"去天界的城堡旅游",
    price:999,
    date:"2019-6-12",
    category:{
        id:1,
        name:'旅行',
        type:'outcome',
        iconName:'ios-plane'

    }
}]
class App extends Component{
 render(){
     return (
         <div className="App">
             <Home></Home>
         </div>
     );
 }
}

export default App;
