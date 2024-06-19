import React from "react";
import ReactDOM from "react-dom/client";
 
const el = document.getElementById("root");
 
const root = ReactDOM.createRoot(el!);
 
interface AppProps {
  color?: string;
}

/*
interface AppState {
  counter: number;
} 
*/


class App extends React.Component<AppProps> {
  state = { counter: 0 };  

  /*
  constructor(props: AppProps) {
    super(props);

    this.state = { counter: 0  }
  }
  */
 
  onIncrement = () : void => {
    this.setState({ counter: this.state.counter + 1 });
  }

  onDecrement = () : void => {
    this.setState({ counter: this.state.counter - 1 });
  } 


  render() {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>
          Hello, World! {this.state.counter}
        </h1>
        <button onClick={this.onIncrement}>
          Increment
        </button>
        <button onClick={this.onDecrement}>
          Decrement 
        </button>
      </div>
    );
  }
}

root.render(<App />);

/*

const App = (props: AppProps) : JSX.Element => {
  const [counter, setCounter] = React.useState(0);

  const onIncrement = () => {
    setCounter(counter + 1);
  }

  const onDecrement = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1 style={{ color: props.color }}>
        Hello, World! {counter}
      </h1>
      <button onClick={onIncrement}>
        Increment
      </button>
      <button onClick={onDecrement}>
        Decrement 
      </button>
    </div>
  );
} 
  */
