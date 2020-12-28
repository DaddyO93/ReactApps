import React, { Component } from 'react';
import { render } from 'react-dom';

class TicTacToe extends Component {
    state = {
        turn: 1,
        token: "X",
        player: 1,
        winningConditions: [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [1,5,9],
            [3,5,7]
        ],
        player1: [],
        player2: [],
    };

    determineWin(){
        for (let i = 0; i<=7; i++){
            if (this.state.winningConditions[i].every(r=> this.state.player1.includes(r))){
                document.getElementById("winner").innerHTML= "Player 1 Wins!"
            }
            if (this.state.winningConditions[i].every(r=> this.state.player2.includes(r))){
                document.getElementById("winner").innerHTML= "Player 2 Wins!"
            }     
        }
    }

    resolveTurn = (selectedID) => {
        if (this.state.turn % 2 === 0){
            this.setState({
                player2: [...this.state.player2, selectedID],
                player: 2,
                token: "X",
                turn: this.state.turn + 1
            })
        }
        else{
            this.setState({
                player1: [...this.state.player1, selectedID],
                player: 1,
                token: "O",
                turn: this.state.turn + 1
            })
        }
        document.getElementById(selectedID).innerHTML = this.state.token;
    }

    reset = () => {
        this.setState({
            turn: this.state.turn = 1,
            token: "X",
            player: 1,
            player1: [],
            player2: [],
        })
        window.location.reload()
    }

    render () {
        this.determineWin()

        return (
            <div className="container mt-5">
                <div className="col-6 mx-auto">
                    <h1 className="border-bottom">Tic-Tac-Toe</h1>
                    <h3 id="winner">Player {this.state.player} turn</h3>
                    <h5>Round: {this.state.turn}</h5>
                    <div className="shadow-lg">
                        <div className="row mt-2">
                            <div className="border-right border-bottom col bg-dark text-white text-center display-1 font-weight-bolder" id="1"><button className="btn h-100 w-100" onClick={() => this.resolveTurn(1)}></button></div>
                            <div className="border-right border-bottom col bg-dark text-white text-center display-1 font-weight-bolder" id="2"><button className="btn h-100 w-100" onClick={() => this.resolveTurn(2)}></button></div>
                            <div className="border-right border-bottom col bg-dark text-white text-center display-1 font-weight-bolder" id="3"><button className="btn h-100 w-100" onClick={() => this.resolveTurn(3)}></button></div>
                        </div>                
                        <div className="row">
                            <div className="border-right border-bottom col bg-dark text-white text-center display-1 font-weight-bolder" id="4"><button className="btn h-100 w-100" onClick={() => this.resolveTurn(4)}></button></div>
                            <div className="border-right border-bottom col bg-dark text-white text-center display-1 font-weight-bolder" id="5"><button className="btn h-100 w-100" onClick={() => this.resolveTurn(5)}></button></div>
                            <div className="border-right border-bottom col bg-dark text-white text-center display-1 font-weight-bolder" id="6"><button className="btn h-100 w-100" onClick={() => this.resolveTurn(6)}></button></div>
                        </div>                
                        <div className="row">
                            <div className="border-right border-bottom col bg-dark text-white text-center display-1 font-weight-bolder" id="7"><button className="btn h-100 w-100" onClick={() => this.resolveTurn(7)}></button></div>
                            <div className="border-right border-bottom col bg-dark text-white text-center display-1 font-weight-bolder" id="8"><button className="btn h-100 w-100" onClick={() => this.resolveTurn(8)}></button></div>
                            <div className="border-right border-bottom col bg-dark text-white text-center display-1 font-weight-bolder" id="9"><button className="btn h-100 w-100" onClick={() => this.resolveTurn(9)}></button></div>
                        </div>
                    </div>
                    <p className="mt-2">Player 1 is "X" - Player 2 is "O"</p>
                    <button className="btn btn-secondary m-1 shadow" onClick={() => this.reset()}>Play Again</button>
                </div>
            </div>
        )
    }
}

export default TicTacToe