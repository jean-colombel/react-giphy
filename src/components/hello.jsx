class Hello extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      clicked: false,
      counter: 0
    }
  }

  render() {
    return (
      <div className={this.state.clicked ? 'clicked' : ''}
        onClick={this.handleClick}>
        Hello, this is {this.props.name} {this.state.counter}
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }
}