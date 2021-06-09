import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.util';
import CustomButton from '../Custom-button/Custom-button.component';
import FormInput from "../form-input/form-input"
import "./sign-in.style.scss"
class signIn extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            email:"",
            password:""
        }
    }
    handleChange = event=>
    {
        const{name,value}=event.target;
        this.setState({[name]:value});

    }
    handleSubmit =event=>
    {
        event.preventDefault();
        this.setState({email:"",password:""})
    }
    render()
    {
        return(<div class="sign-in">
            <h1>Already have an account</h1>
            <span>Sign in through email</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email"/>
                
                <FormInput name="password"type="password" value={this.state.password} handleChange={this.handleChange} label="Password"/>
                
                <CustomButton type="submit" value="Submit">Submit</CustomButton>
                <CustomButton  onClick={signInWithGoogle}>{' '}Sign In with Google{' '}</CustomButton>
            </form>
        </div>);

    }
}
export default signIn;