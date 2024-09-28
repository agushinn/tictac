import { useState } from 'react'

import { Header } from '@components/Header/Header'
import { PlayersContainer } from '@components/Player/PlayersContainer'

import { SYMBOL_X } from '@utils/symbols'

function App() {
    // Todo: set the active player
    const [playerActive, setPlayerActive] = useState(SYMBOL_X)

    return (
        <>
            <Header />
            <div id="game-container">
                <PlayersContainer playerActive={playerActive} />
            </div>
        </>
    )
}

export default App
