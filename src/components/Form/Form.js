import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './Form.module.scss';
import Radio from './FormRadio';
import AppContext from '../../context';

class Form extends React.Component {

    state = {
        title: '',
        description: '',
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return(
            <AppContext.Consumer>
                {(context) => (
                    <div className={styles.wrapper}>
                    <h2>Title</h2>
                    <form 
                        autoComplete="off"
                        className={styles.form}
                        onSubmit={(e) => context.addItem(e, this.state)}
                    >
                        <div>
                            <Radio>Priority</Radio>
                            <Radio>Task</Radio>
                            <Radio>Shopping</Radio>
                            <Radio>Note</Radio>
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
                        <Button>+</Button>
                    </form>
                </div>
                )}
            </AppContext.Consumer>
        );
    }
}

export default Form;