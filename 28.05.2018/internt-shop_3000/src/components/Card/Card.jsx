import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Card = ({obj, plus, minus, deleteCard}) => {

        return (
            <ul className='wrap-ul'>
                {obj.map((elem, indx) => {
                    let a = elem.price * elem.total;
                    return <li className='wrap-card'
                               key={elem.id}
                               id={indx}
                    >
                        <img src="" alt="poster"/>
                        <div>
                            <button onClick={deleteCard} className='button-del_card'>delete card</button>
                            <p>name: {elem.name}</p>
                            <p>author: {elem.author}</p>
                            <p>price $: {elem.price}</p>
                            <p>total: {elem.total}</p>
                            <p>amount $: {a}</p>
                            <div className='wrap-counter'>
                                <button onClick={minus} className='calc'>-</button>
                                <button onClick={plus} className='calc'>+</button>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        )
};

Card.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        author: PropTypes.string,
        price: PropTypes.number,
        total: PropTypes.number,
        id: PropTypes.string
    })),

    deleteCard:PropTypes.func,
};

Card.defaultProps = {
    books: [{
        name: 'OOOOO',
        author: 'OOOOO',
        price: 0,
        total: 1,
        id: 'id_000'
    }]
};

export default Card;