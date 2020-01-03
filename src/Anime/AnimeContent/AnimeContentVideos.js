import React, { Component } from 'react';
import './animeContentVideos.scss';

class AnimeContentVideos extends Component {

    renderVideoEpisodes = () => {
        let { episodeVideos } = this.props.anime.images;
        return episodeVideos.map((video, i) => (<img key={i} src={video}></img>));
    }
    
    render() {

        return(
            <div className="anime-content-videos-wrapper">
                <p>Episode Videos</p>
                <hr></hr>
                <div className="anime-content-videos-miniature">
                    {this.renderVideoEpisodes()}
                </div>
            </div>
        );
    }
}

export default AnimeContentVideos;