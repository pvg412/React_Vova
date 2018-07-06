import React, {Component, Fragment} from 'react';
import Card from '../Card/Card';
import './index.css'

class Basket extends Component{

    state = {
        books: [{
            name: 'aaa',
            author: 'aaa',
            price: 41,
            total: 1,
            id: 'id_1'
        }, {
            name: 'ccc',
            author: 'ccc',
            price: 42,
            total: 1,
            id: 'id_2'
        }, {
            name: 'ooo',
            author: 'ooo',
            price: 43,
            total: 1,
            id: 'id_3'
        }]
    };

    /*метод для кнопки плюс*/
    plusCount = (event) => {
            console.log('plus');
        let id = +event.target.parentElement.parentElement.parentElement.id;
            console.log('id:', id);


        this.setState((prevState) => {
            const {books} = prevState;
                // console.log([...books.slice(0, id)], {...books[id]});
                // console.log({...books[id]});
                // console.log({...books[id], total: books[id].total + 1}, ...books.slice([id + 1]));
                // console.log(...books.slice([id + 1])); // выводит пустой массив
                // console.log('prevState:', books[id]);
                // console.log('nextState:', nextState);
            return {
                books: [...books.slice(0, id),
                    {...books[id],
                    total: books[id].total + 1
                    },
                    ...books.slice([id + 1])
                ]
            }
        });
    };

    /*метод для кнопки минус*/
    minusCount = (event) => {
            console.log('minus');
        let id = +event.target.parentElement.parentElement.parentElement.id;
            console.log('id:', id);

        this.setState((prevState) => {
            const {books} = prevState;
                // console.log({...books[id]});
                // console.log([...books.slice(0, id)]);
            return {
                books: [...books.slice(0, id),
                    {...books[id],
                        total: books[id].total - 1
                    },
                    ...books.slice([id + 1])
                ]
            }
        })
    };

    /*метод поштучного удаления карточки из корзины*/
    deleteCard = (event) => {
            console.log('deleteCard');
        let liId = +event.target.parentElement.parentElement;
            console.log('liId:', liId);
        let filteredAdd = this.state.books.filter(el => this.state.books.indexOf(el) !== liId);
            console.log(filteredAdd);

        this.setState({
            books: filteredAdd
        });
    };

    /*метод для того, чтобы свернуть корзину*/
    turnBasket = (event) => {
        let turn = event.target.parentElement;
        turn.classList.toggle('button-turn-toggle');
        console.log(turn);
    };

    /*метод удаления карточек из корзины*/
    clearBasket = (event) => {
        let clear = event.target.parentElement.parentElement.previousSibling;
        console.log(clear)

        this.setState({
            books: []
        })

    };

    render(){
        /*записываю в переменную newArr - массив со значениями из поля total: , чтобы потом использовать этот массив */
        let newArr = this.state.books.map((el) => el.total);
        console.log(newArr);

        /*если в корзина пустая, то не применять метод reduce для массива newArr*/
        let b = this.state.books.length < 1 ? null : newArr.reduce(function (sum, current) {return sum + current});

        return(
            <Fragment>
                <button>Basket</button>
                <div className='wrap-basket'>
                    <button className='button-close'>X</button>
                    <button className='button-turn' onClick={this.turnBasket}>_</button>
                        <Card obj={this.state.books}
                              plus={this.plusCount}
                              minus={this.minusCount}
                              deleteCard={this.deleteCard}
                        ></Card>
                    <div>
                        <p>amount total: {b}</p>
                        <p>amount price: {this.state.books.reduce((acc, book) => (
                            (book.price * book.total) + acc
                        ), 0)} $</p>
                        <div className='wrap-btn'>
                            <button className='button-buy'>BUY</button>
                            <button className='button-del' onClick={this.clearBasket}>DEL</button>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Basket;