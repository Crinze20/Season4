import React, { Component } from 'react'

export default class Header extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            login: false
        }
    }

    changeInput(login) {
        this.setState({
            login: login
        })

        var sign = prompt("Masukan username anda");
        alert(`Selamat anda berhasil login dengan username: ${sign}`)

    }

    render() {
        return (
            <div>
                <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <h1 className="title">Crinz.</h1>
                        </a>
                        <div className="navbar-end">
                            <a className="navbar-item">
                            Create Meetup
                            </a>
                            <a className="navbar-item">
                            Explore
                            </a>
                        </div>
                    </div>
                    <div id="navbarMenuHeroC" className="navbar-menu">
                        <div className="navbar-end">
                            <p className="navbar-item is-active" onClick={() => this.changeInput(true) }>
                                Login
                            </p>
                        </div>
                    </div>
                </nav>
                <br/>
            </div>
        )
    }
}