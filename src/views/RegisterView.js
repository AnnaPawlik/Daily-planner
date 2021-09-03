import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../components/Title/Title';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

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
        username: '',
        email: '',
        password: '',
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    };

    handleSubmit = e => {
        e.preventDefault();
    };

    render() {
        return(
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
                    <Button>Sign Up</Button>
                    <Link as={NavLink} to="/">Cancel</Link>
                </StyledForm>
            </Wrapper>
        );
    }
}

export default RegisterView;