import React from "react";
import { connect } from "react-redux";
import { fetchTodos, ToDo} from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: ToDo[];
  fetchTodos: Function;
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: ToDo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: ToDo[] } => {
  return { todos };
}

export const App = connect(
  mapStateToProps,
  { fetchTodos }
)(_App);
