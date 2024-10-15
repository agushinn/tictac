import styles from '@styles/components/Board/Board.module.scss'

const Board = ({ board, onUpdatePlayerActive }) => {
    return (
        <ol className={styles.gameBoard}>
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((column, columnIndex) => (
                            <li key={columnIndex}>
                                <button
                                    onClick={() =>
                                        onUpdatePlayerActive(
                                            rowIndex,
                                            columnIndex
                                        )
                                    }
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
