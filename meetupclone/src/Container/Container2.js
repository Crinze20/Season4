import React, { Component } from 'react'
import NextEvent from './../Components/NextEvent'

export default class Container2 extends Component {
    constructor(props) {
        super()
        this.state = {
            test: ""
        }
    }

    render() {
        return (
            <div>
                <NextEvent/>
            </div>
        )
    }
}