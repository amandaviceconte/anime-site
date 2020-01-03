import React, { Component } from 'react';
import AnimeContentStatus from './AnimeContentStatus';
import AnimeContentResume from './AnimeContentResume';
import AnimeContentVideos from './AnimeContentVideos';
import './animeContent.scss';

class AnimeContent extends Component {
    render() {
        return (
            <div className="anime-content">
                <AnimeContentStatus {...this.props}/>
                <AnimeContentResume {...this.props}/>
                <AnimeContentVideos {...this.props}/>
            </div>
        );
    }
}

export default AnimeContent;