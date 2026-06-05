import { clsx } from "clsx"
import type { Languages } from "../language"
import type { JSX } from "preact/jsx-runtime"

type LanguageChipsProp = {
    languages: Languages[]
    wrongGuessCount: number
}

export default function LanguageChips({ languages, wrongGuessCount }: LanguageChipsProp) {
    const languageElements = languages.map((lang: Languages, index: number): JSX.Element => {
        const isLanguageLost: boolean = index < wrongGuessCount
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        const className = clsx("chip", isLanguageLost && "lost")

        return (
            <span
                className={className}
                style={styles}
                key={lang.name}
            >
        {lang.name}
      </span>
        )
    })

    return <section className="language-chips">{languageElements}</section>
}