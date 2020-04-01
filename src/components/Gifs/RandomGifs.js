import React, { Component } from 'react';
import GifsRequests from './GifsRequests';
import GifsList from './GifList';
import './style.css'

class RandomGifs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: {}
        };
    }

    async componentDidMount() {
        let gifs = await GifsRequests.getRandomGifs();
        console.log(gifs);

        this.setState({ gifs })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default RandomGifs;