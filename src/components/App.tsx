import React from "react";
import { connect } from "react-redux";
import { fetchTodos, deleteToDo, ToDo} from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: ToDo[];
  fetchTodos: Function;               // typeof fetchTodos; // This is the same as Function typescript doesn't know what fetchTodos because it is a promise
  deleteToDo: typeof deleteToDo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {

    this.props.fetchTodos();

    this.setState({ fetching: true });

  }

  onDeleteClick = (id: number): void => {
    this.props.deleteToDo(id);
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: ToDo) => {
      return (
        <div key={todo.id}>
          {todo.title}
          <button onClick={() => this.onDeleteClick(todo.id)}>Delete</button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? 'LOADING' : null}
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
  { fetchTodos, deleteToDo }
)(_App);
