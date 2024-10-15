import { useState } from 'react'

import { Header } from '@components/Header/Header'
import { PlayersContainer } from '@components/Player/PlayersContainer'
import { Board } from '@components/Board/Board'
import { Log } from '@components/Log/Log'

import { SYMBOL_X, SYMBOL_O, INITIAL_GAME_BOARD } from '@utils/constants'

function App() {
    const [board, setBoard] = useState(INITIAL_GAME_BOARD)
    const [playerActive, setPlayerActive] = useState(SYMBOL_X)
    const [turns, setTurns] = useState([])

    const handleSelectPlayer = (row, col) => {
        setPlayerActive((prevPlayer) =>
            prevPlayer === SYMBOL_X ? SYMBOL_O : SYMBOL_X
        )

        setTurns((prevTurns) => {
            // Ensure that we take the latest playerActive state
            let currentPlayer = SYMBOL_X

            if (prevTurns.length > 0 && prevTurns[0].turn === SYMBOL_X) {
                currentPlayer = SYMBOL_O
            }

            const updateTurns = [
                {
                    turn: currentPlayer,
                    row,
                    col,
                },
                ...prevTurns,
            ]

            return updateTurns
        })

        setBoard((prevBoard) => {
            // deep copy of the board to prevent mutation
            const updatedBoard = [
                ...prevBoard.map((innerArray) => [...innerArray]),
            ]
            updatedBoard[row][col] = playerActive
            return updatedBoard
        })
    }

    return (
        <>
            <Header />
            <div id="game-container">
                <PlayersContainer playerActive={playerActive} />
                <Board
                    board={board}
                    onUpdatePlayerActive={handleSelectPlayer}
                />
            </div>
            <Log logs={turns} />
        </>
    )
}

export default App
