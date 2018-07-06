import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

const ToDoItems = ({items, deleteItems}) => {
    const taskArr = items.map(el => <li key={el.id} data-liid={el.id}>{el.text}</li>);
    return (
        <ul className='theList' onClick={deleteItems}>
            <FlipMove>
                {taskArr}
            </FlipMove>
        </ul>
    )
};

ToDoItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.number,
    })),

    deleteItems: PropTypes.func,
};

ToDoItems.defaultProps = {
    items: [{
        text: 'default task',
        id: 0
    }]
};

export default ToDoItems;