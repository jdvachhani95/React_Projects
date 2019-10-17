import React, { Component } from 'react'
import './coin.css'

class Coin extends Component{
    render(){
        return(
            <div className='Coin'>
                {this.props.face ? 
                    (<img alt={this.props.face.side} src={this.props.face.imgSrc}></img>) : null
                }
            </div>
        );
    }
}

export default Coin;
