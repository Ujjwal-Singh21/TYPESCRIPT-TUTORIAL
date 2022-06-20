import { Component } from 'react'

type CounterPropsType = {
  message: string
}

type CounterStateType = {
  count: number
}

export class ClassCounter extends Component<CounterPropsType, CounterStateType> {

  state = {
    count: 0
  }

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <h2> {this.props.message} {this.state.count} </h2>
        <button onClick={this.handleIncrement}> Increment </button>
      </div>
    )
  }
}

export default ClassCounter