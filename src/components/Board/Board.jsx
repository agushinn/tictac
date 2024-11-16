import styles from '@styles/components/Board/Board.module.scss'

import { INITIAL_GAME_BOARD } from '@utils/constants'

const Board = ({ turns, onUpdatePlayerActive }) => {
    let board = INITIAL_GAME_BOARD

    for (const turn of turns) {
        const { currentPlayer, row, col } = turn
        board[row][col] = currentPlayer
    }

    return (
        <ol className={styles.gameBoard}>
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((column, columnIndex) => (
                            <li key={columnIndex}>
                                <button
                                    disabled={column !== null}
                                    onClick={() => {
                                        onUpdatePlayerActive(
                                            rowIndex,
                                            columnIndex
                                        )
                                    }}
                                >
                                    {column}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}

export { Board }
