import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './PostFilterForm.scss';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null
}

function PostFilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleOnChange(e) {
        if (!onSubmit) return;

        const value = e.target.value;
        setSearchTerm(value);

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {


            const filterValues = {
                searchTerm: value
            };
            onSubmit(filterValues);
        }, 300);
    }

    return (
        <div className="post-filter-form">
            <form>
                <input type="text" value={searchTerm} onChange={handleOnChange} />
            </form>
        </div>
    );
}

export default PostFilterForm;