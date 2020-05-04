import React,{useEffect} from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "../../redux/store";
import  "./app.scss";
import router from "../../router";



function App() {


  const loadRouter = () =>{
    let result = (<Switch>
        {
          router.map( (item,index) =>
            <Route key={index}  path={item.path} exact={item.exact ? true : false} component={item.main} />
            )
        }
      </Switch> )
      return result;
  }
  return (
    <Provider  store = {store} >
      <Router>
        <div className="App">
          {loadRouter()}
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
