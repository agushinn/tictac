import { useState } from 'react'

import { Header } from '@components/Header/Header'
import { PlayersContainer } from '@components/Player/PlayersContainer'
import { Board } from '@components/Board/Board'
import { Log } from '@components/Log/Log'
import { Modal } from '@components/Modal/Modal'
import { INITIAL_GAME_BOARD } from '@utils/constants'

import { deriveActivePlayer, validateWinnerCondition } from '@utils/helper'

function App() {
    const [turns, setTurns] = useState([])

    // set initial player active, not as state but as computed state
    // based on turns object
    const playerActive = deriveActivePlayer(turns)

    let board = [...INITIAL_GAME_BOARD.map((innerArray) => [...innerArray])]

    for (const turn of turns) {
        const { currentPlayer, row, col } = turn
        board[row][col] = currentPlayer
    }

    const handleSelectPlayer = (row, col) => {
        setTurns((prevTurns) => {
            // Ensure that we take the latest playerActive state
            const currentPlayer = deriveActivePlayer(prevTurns)

            const updateTurns = [
                {
                    currentPlayer,
                    row,
                    col,
                },
                ...prevTurns,
            ]

            return updateTurns
        })
    }

    let result = validateWinnerCondition(board, turns)

    const restartGameHandler = () => {
        setTurns([])
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
            {result && <Modal onAccept={restartGameHandler} result={result} />}
        </>
    )
}

export default App
