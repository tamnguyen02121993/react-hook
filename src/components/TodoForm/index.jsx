import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TodoForm.scss'

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    function handleOnSubmit(e) {
        e.preventDefault();

        if (!onSubmit) return;

        onSubmit({
            title: value
        });

        setValue('');
    }

    function handleOnValueChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className="todo-form">
            <form onSubmit={handleOnSubmit}>
                <input type="text" value={value} onChange={handleOnValueChange} />
            </form>
        </div>
    );
}

export default TodoForm;