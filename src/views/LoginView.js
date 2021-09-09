import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../components/Title/Title';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import store from '../redux/store';

const Wrapper = styled.div`
    width: 100vw;
    background-color: #FFD829;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Styleddiv = styled.div`
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

class LoginView extends React.Component {

    state = {
        email: '',
        password: '',
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    };

    handleSubmit = () => {
        const { email, password } = this.state;
    
        if (
          store.getState().addUser.email === email &&
          store.getState().addUser.password === password
        ) {
          this.props.history.push("/home");
        } else {
          console.log("email or password is incorrect");
        }
      };

    render() {
        return(
            <Wrapper>
                <Styleddiv 
                    autoComplete="off"
                    onSubmit={this.handleSubmit}
                >
                    <Title>Welcome, Login</Title>
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
                    <Button onClick={this.handleSubmit}>Sign In</Button>
                    <Link as={NavLink} to="/register">Register</Link>
                </Styleddiv>
            </Wrapper>
        );
    }
}

export default LoginView;