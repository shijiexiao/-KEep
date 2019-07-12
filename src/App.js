import React,{Component} from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import Home from './containers/Home'
import  {BrowserRouter as Router,Route,Link} from  'react-router-dom'
import Create from  './containers/create'
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
         <Router>
             <div className="App">
                 <div className="container pb-5">
                    <Route path="/" exact component={Home}></Route>
                     <Route path="/create" exact component={Create}></Route>

                 </div>
             </div>
         </Router>

     );
 }
}

export default App;
