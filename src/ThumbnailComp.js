import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './main.css'


export class ThumbnailComp extends Component {
    render(){
        return(

            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href={this.props.data.images[2].url}>
                        <img src={this.props.data.images[2].url} alt="Trolltunga Norway" width="300" height="200"/>
                    </a>
                    <div className="desc"><p className='overflow-ellipsis'>{this.props.data.name}</p></div>
                    <div className="descBtn"><Button bsStyle="primary" bsSize="large"><a className='hyperlink' href={this.props.data.external_urls.spotify}>Open</a></Button></div>
                </div>
            </div>
        )
    }

}