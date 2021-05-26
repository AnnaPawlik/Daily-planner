import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './Form.module.scss';
import Radio from './FormRadio';
import AppContext from '../../context';
import Title from '../Title/Title';

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
                    <div className={styles.wrapper}>
                    <Title>Add new {description[type]}</Title>
                    <form 
                        autoComplete="off"
                        className={styles.form}
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
                            label="title"
                        />
                        <Input
                            onChange={this.handleInputChange}
                            value={this.state.description}
                            name="description"
                            tag="textarea"
                            label="description"
                        />
                        <Button secondary>Add</Button>
                    </form>
                </div>
                )}
            </AppContext.Consumer>
        );
    }
}

export default Form;