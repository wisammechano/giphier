import React, { Component } from 'react';
import TrendingGifs from './TrendingGifs';
import RandomGifs from './RandomGifs';
import GifModal from '../GifDetailsComponent/GifDetails'


class GifComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            gif: {}
        }
    }


    onGifClicked = gif => {
        this.setState({ modal: true, gif })
    }

    render() {

        const { match } = this.props
        // console.log(match);

        return (
            <>
                <TrendingGifs onGifClicked={this.onGifClicked} />
                <RandomGifs />
                <GifModal modal={this.state.modal} gif={this.state.gif} />
            </>
        );
    }
}

export default GifComponent;