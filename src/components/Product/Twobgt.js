import React, { Component } from 'react'
import Gallery from "../Product/gallery"

export default class Twobgt extends Component  {
    constructor(props) {
        super(props);
        this.state = {stove: "smart" };

        this.handleSmartClick = this.handleSmartClick.bind(this);
        this.handleStreakClick= this.handleStreakClick.bind(this);
        this.handleGleamClick= this.handleGleamClick.bind(this);
        this.handleStreakAutoClick= this.handleStreakAutoClick.bind(this);
        this.handleZealClick= this.handleZealClick.bind(this);
       
    }

    handleSmartClick(){
        this.setState({stove: "smart"});
    }

    handleStreakClick(){
        this.setState({stove: "streak"});
    }

    handleGleamClick(){
        this.setState({stove: "gleam"});
    }

    handleStreakAutoClick(){
        this.setState({stove: "streakauto"});
    }

    handleZealClick(){
        this.setState({stove: "zeal"});
    }


    render() {

        return (
           

            <div className="container-fluid test py-3">
                <div className="row">
                    <div className="col-lg-3 d-flex align-items-center justify-content-center py-2">
                        <h3 className="font-weight-bold text-uppercase">{this.props.header}</h3>
                    </div>
                    <div className="col-lg-9 col-md-12 mx-auto">
                        {/*Creating a image nav */}
                        <div className="container-fluid sticky-top mx-auto ">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto mx-3 text-center">
                                    <a href="#" ><span onClick={this.handleSmartClick}>SMART</span></a>
                                </div>
                                <div className="col-auto mx-3  text-center">
                                    <a href="#" ><span onClick={this.handleGleamClick}>GLEAM</span></a>
                                </div>
                                <div className="col-auto mx-3  text-center">
                                    <a href="#" ><span onClick={ this.handleStreakClick}>STREAK</span></a>
                                </div>
                                <div className="col-auto mx-3  text-center">
                                    <a href="#" ><span onClick={this.handleStreakAutoClick}>STREAK Auto</span></a>
                                </div>
                                <div className="col-auto mx-3  text-center">
                                    <a href="#" ><span onClick={this.handleZealClick}>ZEAL</span></a>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center ">
                                <div className="col-auto">
                                <Gallery que={this.props.que} stove={this.state.stove} /> 
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        )
    }
}
