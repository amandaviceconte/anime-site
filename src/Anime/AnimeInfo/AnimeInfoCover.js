import React, { Component } from 'react';
import './animeInfoCover.scss';

class AnimeInfoCover extends Component {

    render() {
        let { cover } = this.props.anime.images;
        let { facebook, twitter, tumblr } = this.props.anime.images.icons;

        return (
            <div className="anime-info-cover-wrapper">
                <div className="anime-info-cover-image">
                    <img src={cover} />
                </div>

                <div className="anime-info-cover-links">
                    <a href="#">Add to My List</a>
                    <a href="#">Add to Favorites</a>
                </div>

                <div className="anime-info-cover-icons">
                    <img alt="facebook" src={facebook}></img>
                    <img alt="twitter" src={twitter}></img>
                    <img alt="tumblr" src={tumblr}></img>
                </div>
            </div>
        );
    }
}

export default AnimeInfoCover;