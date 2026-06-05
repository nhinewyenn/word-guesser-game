type NewGameButtonProp = {
    isGameOver: boolean
    startNewGame: () => void
}

export default function NewGameButton({ isGameOver, startNewGame }: NewGameButtonProp) {
    if (!isGameOver) {
        return null
    } else {
        return (
            <button className="new-game" onClick={startNewGame}>
                New Game
            </button>
        )
    }
}