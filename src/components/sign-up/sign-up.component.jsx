import React, {Component} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUser } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

class SignUp extends Component {
  constructor(){
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state
    if (password !== confirmPassword) {
      alert('Your passwords are not the same')
      return 
    }
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await createUser(user, {displayName})
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch(err) {
      // throw error
      alert(err.message)
      console.log(err)
    }
  }

  handleChange = event => {
    const {name, value} = event.target 
    this.setState({[name]: value})
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state

    return (
      <div className="signup">
        <h2 className="title">I do not have an account</h2>
        <span>Sign Up with your email and password</span>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          {/* form input components */}
          <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Name" required />
          <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required />
          <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required />
          <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" required />
          {/* submit button  */}
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp