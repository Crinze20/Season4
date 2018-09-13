import React from 'react'

class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      name: null,
      showInput: false
    }
  }

  setName(name) {
    this.setState({
      name: name
    })
  }

  changeInput(input) {
    this.setState({
      showInput: input
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.state.name ? `Hi ${this.state.name}!` : `Kamu belum bergabung di ${this.state.title}!`}</p>
            </div>
          </div>

          <div className="content">
            <br />
            <br />
            <p className="button" onClick={()=>this.changeInput(true)}>Join us! </p>
          </div>

          {this.state.showInput && (
            <div>
              <input
                onChange={(e) => this.setName(e.target.value)}
                className="input"
                type="text"
                placeholder="What is your name"
              />
              <p className = "button" onClick={() => this.changeInput(false)}>Itu aja nama saya.</p>
            </div>
          )}

      </div>
    </div>
    )
  }
}

export default Cards
