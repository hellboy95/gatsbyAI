import React, { Component } from 'react'
import Img from "gatsby-image"
import {Carousel} from 'react-bootstrap';

export default class gallery extends Component {
   
   

    
    render() {
        
        if(this.props.stove === "smart"){
            
            return (
                <Carousel interval="2000" > 
                    {this.props.que.smart.edges.map(({ node }) => {
                        return (
                            <Carousel.Item key={node.photoName}>
                                <Img fixed={node.photo.fixed} />
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            )
        }
        if(this.props.stove === "streak"){
            
            return (
                <Carousel interval="2000" > 
                    {this.props.que.streak.edges.map(({ node }) => {
                        return (
                            <Carousel.Item key={node.photoName}>
                                <Img fixed={node.photo.fixed} />
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            )
        }
        if(this.props.stove === "gleam"){
            
            return (
                <Carousel interval="2000" > 
                    {this.props.que.gleam.edges.map(({ node }) => {
                        return (
                            <Carousel.Item key={node.photoName}>
                                <Img fixed={node.photo.fixed} />
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            )
        }
        if(this.props.stove === "streakauto"){
            
            return (
                <Carousel interval="2000" > 
                    {this.props.que.streakauto.edges.map(({ node }) => {
                        return (
                            <Carousel.Item key={node.photoName}>
                                <Img fixed={node.photo.fixed} />
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            )
        }
        if(this.props.stove === "zeal"){
           
            return (
                <Carousel interval="2000" > 
                    {this.props.que.zeal.edges.map(({ node }) => {
                        return (
                            <Carousel.Item key={node.photoName}>
                                <Img fixed={node.photo.fixed} />
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            )
        }
    }
}
