import React from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Radio from './FormRadio';
import AppContext from '../../context';
import Title from '../Title/Title';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const StyledForm = styled.form`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const types = {
    priority: "priority",
    task: "task",
    product: "product",
    note: "note",
}

const description = {
    priority: "priority",
    task: "task",
    product: "shopping products",
    note: "note",
}

class Form extends React.Component {

    state = {
        type: types.priority,
        title: '',
        time: '',
        description: '',
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleRadioChange = type => {
        this.setState({
            type: type,
        });
    };

    render() {
        const { type } = this.state;

        return(
            <AppContext.Consumer>
                {(context) => (
                    <Wrapper>
                    <Title>Add new {description[type]}</Title>
                    <StyledForm 
                        autoComplete="off"
                        onSubmit={(e) => context.addItem(e, this.state)}
                    >
                        <div>
                            <Radio 
                                id={types.priority}
                                checked={type === types.priority}
                                changeFn={() => this.handleRadioChange(types.priority)}
                            >
                                Priority
                            </Radio>
                            <Radio
                                id={types.task}
                                checked={type === types.task}
                                changeFn={() => this.handleRadioChange(types.task)}
                            >
                                Task
                            </Radio>
                            <Radio
                                id={types.product}
                                checked={type === types.product}
                                changeFn={() => this.handleRadioChange(types.product)}
                            >
                                Shopping
                            </Radio>
                            <Radio
                                id={types.note}
                                checked={type === types.note}
                                changeFn={() => this.handleRadioChange(types.note)}
                            >
                                Note
                            </Radio>
                        </div>
                        <Input
                            onChange={this.handleInputChange}
                            value={this.state.title}
                            name="title"
                            label={type === types.product ? "Product" : "Title"}
                            maxLength="30"
                        />
                        { type === types.task ? (
                            <Input 
                                onChange={this.handleInputChange}
                                value={this.state.time}
                                name="time"
                                label="Time"
                                maxLength="6"
                            />
                        ) : null }                    
                        <Input
                            onChange={this.handleInputChange}
                            value={this.state.description}
                            name="description"
                            label="Description"
                            textarea
                        />
                        <Button>Add</Button>
                    </StyledForm>
                </Wrapper>
                )}
            </AppContext.Consumer>
        );
    }
}

export default Form;