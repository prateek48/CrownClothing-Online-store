import React, { Component } from "react";
import { Route, Switch } from "react-router";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/Shop/Shop.component";
import Header from "./component/header/header.component"
import "./App.css"
import signIn from "./component/sign-in-and-out/sign-in-and-out";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";


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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth)
      {
        const userRef=await createUserProfileDocument(userAuth);
       // console.log(userRef);
        userRef.onSnapshot(snapShot=>{
          this.setState({
            current_user:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.setState({current_user:userAuth});
      
    });
   

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
