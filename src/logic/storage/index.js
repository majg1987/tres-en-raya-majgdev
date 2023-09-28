export const saveGameStorage = (board, turn) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}
export const saveVictoriesStorage = (victories) => {
    window.localStorage.setItem('victories', JSON.stringify(victories))
}

export const resetVictoriesStorage = () => {
    window.localStorage.removeItem('victories')
}

export const showModalWinnerStorage = (winner) => {
    window.localStorage.setItem('winner', winner)
}

