import { useState } from 'react'

import styles from '@styles/components/Player/Player.module.scss'

const Player = ({ defaultName, symbol, isActive }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(defaultName)

    const clickEditHandler = () => {
        setIsEditing((prevValue) => !prevValue)
    }

    const changePlayerNameHandler = (event) => {
        setPlayerName(event.target.value)
    }

    let content = <span className={styles.playerName}>{playerName}</span>

    if (isEditing) {
        content = (
            <input
                type="text"
                value={playerName}
                onChange={changePlayerNameHandler}
                className={styles.editInput}
            />
        )
    }

    return (
        <li className={`${isActive == symbol ? styles.active : undefined}`}>
            <span className={styles.player}>
                {content}
                <span className={styles.playerSymbol}>{symbol}</span>
            </span>
            <button onClick={clickEditHandler}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    )
}

export { Player }
