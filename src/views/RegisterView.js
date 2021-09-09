import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../components/Title/Title';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import store from '../redux/store';
import { addUser } from '../redux/actions';

const Wrapper = styled.div`
    width: 100vw;
    background-color: #FFD829;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledForm = styled.form`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    padding: 100px;
    border-radius: 10px;
    box-shadow: 0 20px 40px -5px rgba(0, 0, 0, .3);

`;

const Link = styled(Button)`
    text-decoration: none;
    background-color: #fff;
    color: #7d7d7d;
    margin-left: 15px;
`;

class RegisterView extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePassword = () => {
    const { username, email, password, passwordConfirm } = this.state;

    if (password === passwordConfirm) {
      console.log("SUCCESS!!");
      store.dispatch(
        addUser({ username: username, email: email, password: password })
      );
      this.props.history.push("/");
    } else {
      console.log("password incorrect");
    }
  };

  handleSubmit = () => {
    const { username, email, password, passwordConfirm, } = this.state;
    if (username === "" || email === "") {
      console.log("please fill out fields");
    } else if (password === "" || passwordConfirm === "") {
      console.log("please fill out the password field");
    } else {
      this.handlePassword();
    }
  };

  render() {
    return (
          <Wrapper>
            <StyledForm 
            autoComplete="off"
            onSubmit={this.handleSubmit}
            >
              <Title>Welcome, Create Account</Title>
              <Input
                onChange={this.handleInputChange}
                value={this.state.username}
                name="username"
                label="username"
                
              />
              <Input
                onChange={this.handleInputChange}
                value={this.state.email}
                name="email"
                label="email"
              />
              <Input
                onChange={this.handleInputChange}
                value={this.state.password}
                name="password"
                label="password"
              />  
              <Input
                onChange={this.handleInputChange}
                value={this.state.passwordConfirm}
                name="passwordConfirm"
                label="confirm password"
              />  
              <Button onClick={this.handleSubmit}>Sign Up</Button>
              <Link as={NavLink} to="/">Cancel</Link>
            </StyledForm>
          </Wrapper>
    );
  }
}

export default RegisterView;
