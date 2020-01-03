import React, { Component } from 'react';
import './animeContentStatus.scss';

class AnimeContentStatus extends Component {
    
    render() {
        let { score, users, ranked, popularity, members, images } = this.props.anime;

        return(
            <div className="anime-content-status-wrapper">
                <div className="anime-content-left-status">
                    <div className="anime-content-score">
                        <span className="anime-content-score-text">SCORE</span>
                        <span className="anime-content-score-number">{score}</span>
                        <span className="anime-content-users">{users} users</span>
                    </div>
                    <div className="anime-content-numbers">
                        <span>Ranked <b>#{ranked}</b></span>
                        <span>Popularity <b>#{popularity}</b></span>
                        <span>Members <b>{members}</b></span>
                    </div>
                </div>
                <div className="anime-content-right-image">
                    <img src={images.preview}></img>
                </div>
            </div>
        );
    }
}

export default AnimeContentStatus;