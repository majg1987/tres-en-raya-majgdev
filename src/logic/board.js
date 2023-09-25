import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
    // revisamos todas las combinaciones
    // para ver si hay un ganador
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    // Si no hay ganador devolvemos null
    return null
}

export const checkEndGame = (newBoard) => {
    // Revisamos si hay un empate
    // comprobamos que no hay espacios vacios en el tablero 
    return newBoard.every((square) => square !== null)
}