import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import PetPage from './pages/store/petpage.component'
import SignInSignUp from './pages/user-auth/sign-in-sign-up.component'
import CheckoutPage from './pages/checkout/checkout'
import Header from './components/header/header.component'
import { auth, createUser } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user-actions'
import {selectCurrentUser} from './redux/user-selectors'

class App extends React.Component  {
  signoutFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.signoutFromAuth = auth.onAuthStateChanged(async auth => {
      // this.setState({currentUser: user})
      // createUser(user)
      if(auth) {
        const ref = await createUser(auth)
        ref.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id, ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(auth)
      }
    })
  }

  componentWillUnmount() {
    this.signoutFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={PetPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInSignUp />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
