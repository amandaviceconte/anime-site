import React, { Component } from 'react';
import './animeInfoDetail.scss';

class AnimeInfoDetail extends Component {

    renderInformation() {
        let { type, value } = this.props;
        let typeItens = Object.values(type);
        let valueItens = Object.values(value);

        return (
           typeItens.map((typeItem, i) => {
               return <p className="anime-info-detail-item"><span>{typeItem}: </span>{valueItens[i]}</p>;               
           }) 
        );
    }

    render() {
        
        return (
            <div className="anime-info-detail-wrapper">
                <span className="anime-info-detail-title">{this.props.text}</span>
                <hr></hr>
                {this.renderInformation()}
            </div>
        );
    }
}

export default AnimeInfoDetail;