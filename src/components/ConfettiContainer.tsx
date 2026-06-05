import type { JSX } from "preact/jsx-runtime"
import Confetti from "react-confetti"

export default function ConfettiContainer({ isGameWon }: {isGameWon:boolean}): JSX.Element|null {
    if (!isGameWon) {
        return null
    }
    else {
        return (
            <Confetti
                recycle={false}
                numberOfPieces={1000}
            />
        )
    }

}