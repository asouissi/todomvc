import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {

    // This function checks whether an item is completed
    isCompleted(item) {
        return item.get('status') === 'completed';
    }
    // Filters the items according to their status
    getItems() {
        if (this.props.todos) {
            return this.props.todos.filter(
                (item) => this.props.filter === 'all' || item.get('status') === this.props.filter
            );
        }
        return [];
    }
    render() {
        return <section className="main">
            <ul className="todo-list">
                // Only the filtered items are displayed
                {this.getItems().map(item =>
                    <TodoItem key={item.get('id')}
                              id={item.get('id')}
                              text={item.get('text')}
                              isCompleted={this.isCompleted(item)}
                              isEditing={item.get('editing')}
                              doneEditing={this.props.doneEditing}
                              cancelEditing={this.props.cancelEditing}
                              toggleComplete={this.props.toggleComplete}
                              deleteItem={this.props.deleteItem}
                              editItem={this.props.editItem}/>
                )}
            </ul>
        </section>
    }
};