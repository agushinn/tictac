import { SYMBOL_X, SYMBOL_O } from '@utils/constants'

export const deriveActivePlayer = (gameTurns) => {
    let currentPlayer = SYMBOL_X

    if (gameTurns.length > 0 && gameTurns[0].currentPlayer === SYMBOL_X) {
        currentPlayer = SYMBOL_O
    }

    return currentPlayer
}
