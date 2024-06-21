import React from "react";
import { connect } from "react-redux";
import { fetchTodos, ToDo} from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: ToDo[];
  fetchTodos: Function;
}

class _App extends React.Component<AppProps> {
  render() {
    this.props.fetchTodos();

    return (
      <div>
        <h1>Hello World</h1>
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
