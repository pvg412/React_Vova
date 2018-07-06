import React, {Component} from 'react';
import ToDoItems from '../toDoItems/ToDoItems';
import './ToDoList.css';

class ToDoList extends Component{

    state = {
        items: []
    };

    addItems = (event) => {
        event.preventDefault();
        console.log(this.taskInput.value);
        if (this.taskInput.value !== '') {
            let task = {
                text: this.taskInput.value,
                id: Date.now(),
            };
            this.setState({
                items: [...this.state.items, task]
            },)
        }
        this.taskInput.value = '';
    };

    deleteItems = (event) => {
        let liId = +event.target.dataset.liid;
        console.log(liId);

        let filteredArr = this.state.items.filter(el => el.id !== liId);
        this.setState({
            items: filteredArr,
        })
    };

    render() {
        let button = this.state.items.length > 5 ?
            <button type="submit">stop add</button> : <button type="submit">add</button>;

        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItems}>
                        <input placeholder="enter task"
                               ref={(inputTag) => this.taskInput = inputTag}
                        >
                        </input>
                        {button}
                    </form>
                    <ToDoItems items={this.state.items} deleteItems={this.deleteItems}/>
                </div>
            </div>
        )
    };
}

export default ToDoList;