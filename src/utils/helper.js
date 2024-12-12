import { SYMBOL_X, SYMBOL_O } from '@utils/constants'
import { WINNING_COMBINATIONS } from '@utils/winningCombinations'

export const deriveActivePlayer = (gameTurns) => {
    let currentPlayer = SYMBOL_X

    if (gameTurns.length > 0 && gameTurns[0].currentPlayer === SYMBOL_X) {
        currentPlayer = SYMBOL_O
    }

    return currentPlayer
}

export const validateWinnerCondition = (board, turns) => {
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquare = board[combination[0].row][combination[0].column]
        const secondSquare = board[combination[1].row][combination[1].column]
        const thirdSquare = board[combination[2].row][combination[2].column]

        if (
            firstSquare !== null &&
            firstSquare === secondSquare &&
            firstSquare === thirdSquare
        ) {
            console.log('entró en el primer if')
            return `${firstSquare} won!`
        }
    }

    if (turns.length === 9) {
        console.log('entró en if del empate')
        return "It's a draw!"
    }
    return null
}
