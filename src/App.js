import React, { Component } from "react";
import ReactDom from "react-dom";
import { Route, Switch } from "react-router";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/Shop/Shop.component";
import Header from "./component/header/header.component"
import "./App.css"
import signIn from "./component/sign-in-and-out/sign-in-and-out";
import { auth } from "./firebase/firebase.util";


class App extends Component {
  constructor()
  {

    super();
    this.state={
      current_user:null
    }
  
    
  }
  unsubscribeFromAuth=null;
  componentDidMount()
  {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({current_user:user});
      console.log(user);
    })
   

  }
  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }
  render()
  {
    return (
      <div>
      <Header current_user={this.state.current_user}/>
      <Switch>
        <Route  exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/signin" component={signIn}/>
      </Switch>
      
       
      </div>
    );

  }
  
}

export default App;
