import { useState } from 'react'

import { Header } from '@components/Header/Header'
import { PlayersContainer } from '@components/Player/PlayersContainer'
import { Board } from '@components/Board/Board'
import { Log } from '@components/Log/Log'

import { deriveActivePlayer } from '@utils/helper'

function App() {
    const [turns, setTurns] = useState([])

    // set initial player active, not as state but as computed state
    // based on turns object
    const playerActive = deriveActivePlayer(turns)

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

    return (
        <>
            <Header />
            <div id="game-container">
                <PlayersContainer playerActive={playerActive} />
                <Board
                    turns={turns}
                    onUpdatePlayerActive={handleSelectPlayer}
                />
            </div>
            <Log logs={turns} />
        </>
    )
}

export default App
