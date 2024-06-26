import { useEffect, useState } from 'react'

type TypingEffectProps = {
  text: string
  speed: number
}

function TypingEffect({ text, speed }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    const trimmedText = text.trim()
    let index = 0
    const intervalId = setInterval(() => {
      setDisplayedText(trimmedText.slice(0, index + 1))
      index++
      // console.log(`Index ${index - 1}: ${trimmedText.charAt(index - 1)} (code: ${trimmedText.charCodeAt(index - 1)})`);
      if (index >= trimmedText.length) {
        clearInterval(intervalId)
      }
    }, speed)

    return () => clearInterval(intervalId)
  }, [text, speed])

  return <span className='block text-left'>{displayedText}</span>
}

export default TypingEffect
