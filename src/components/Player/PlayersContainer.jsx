import styles from '@styles/components/Player/PlayersContainer.module.scss'

import { Player } from '@components/Player/Player'
import { SYMBOL_X, SYMBOL_O } from '@utils/constants'

const PlayersContainer = ({ playerActive }) => {
    return (
        <ol className={`${styles.playersContainer} `}>
            <Player
                defaultName="Player 1"
                symbol={SYMBOL_X}
                isActive={playerActive}
            />
            <Player
                defaultName="Player 2"
                symbol={SYMBOL_O}
                isActive={playerActive}
            />
        </ol>
    )
}

export { PlayersContainer }
