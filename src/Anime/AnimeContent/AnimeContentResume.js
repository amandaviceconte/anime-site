import React, { Component } from 'react';
import './animeContentResume.scss';

class AnimeContentResume extends Component {

    render() {
        let { synopsis, background } = this.props.anime;

        return (
            <div className="anime-content-resume-wrapper">
                <div className="anime-content-synopsis">
                    <span>Synopsis</span>
                    <hr></hr>
                    <p>{synopsis}</p>
                </div>
                <div className="anime-content-background">
                    <span>Background</span>
                    <hr></hr>
                    <p>{background}</p>
                </div>
            </div>
        );
    }
}

export default AnimeContentResume;