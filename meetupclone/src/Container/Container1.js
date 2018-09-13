import React, { Component } from 'react'
import Artikel from './../Components/Artikel'

export default class Container1 extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="notification">
                        <Artikel/>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

