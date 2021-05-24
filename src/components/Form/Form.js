import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './Form.module.scss';
import Radio from './FormRadio';

class Form extends React.Component {

    state = {
        title: '',
        description: '',
    };

    render() {
        return(
            <div className={styles.wrapper}>
                <h2>Title</h2>
                <form className={styles.form}>
                    <div>
                        <Radio>Priority</Radio>
                        <Radio>Task</Radio>
                        <Radio>Shopping</Radio>
                        <Radio>Note</Radio>
                    </div>
                    <Input
                        value={this.state.title}
                        name="title"
                        label="title"
                    />
                    <Input
                        value={this.state.description}
                        name="description"
                        tag="textarea"
                        label="description"
                    />
                    <Button>+</Button>
                </form>
            </div>
        );
    }
}

export default Form;