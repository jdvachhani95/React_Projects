import React, { Component } from 'react';
import Coin from './Coin';
import { Choice } from './helper';

class Flip extends Component{
    
    static defaultProps = {
        coin:[
            {side:'head', imgSrc:'https://tinyurl.com/react-coin-heads-jpg'},
            {side:'tail', imgSrc:'https://tinyurl.com/react-coin-tails-jpg'}
        ]    
    }

    constructor(props){
        super(props);
        this.state = {
            currCoin:null,
            nFlips:0,
            nHeads:0,
            nTails:0,
            coin: [
                { side:'head', imgSrc:'/react-coin-heads.jpg'},
                { side:'tail', imgSrc:'/react-coin-tails.jpg'}
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flip(){
        const newCoin = Choice(this.state.coin);
        this.setState(st => {
            return{
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side ==='head' ? 1 : 0 ),
                nTails: st.nTails + (newCoin.side ==='tail' ? 1 : 0)
            };
        });
    }

    handleClick(e){
        this.flip();
    }

    render(){
        return(
            <div>
                <h1>Let's Flip the coin..</h1>
                <Coin face={this.state.currCoin}/>
                <button onClick={this.handleClick}> Flip Me!</button>
                <p>
                    Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
                    heads and {this.state.nTails} tails.
                </p>
            </div>
        );
    }
}

export default Flip;