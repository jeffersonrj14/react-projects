import React from 'react'
import hotToast from 'react-hot-toast'
import { ClipboardIcon } from '../../icon/Clipboard'

interface AnimationProps {
  animationClass: string
  animationCSS: string
  children?: React.ReactNode
}

function Animation({ animationClass, animationCSS, children }: AnimationProps) {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(animationCSS)
      hotToast.success('CSS code copied to clipboard!')
    } catch (error) {
      console.error('Failed to copy: ', error)
      hotToast.error('Failed to copy CSS code.')
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      copyToClipboard()
    }
  }

  return (
    <div className='relative p-6 border border-gray-300 rounded-md'>
      <div
        className='absolute top-2 right-2 cursor-pointer hover:text-jefferson-maindark active:text-jefferson-main'
        onClick={copyToClipboard}
        onKeyPress={handleKeyPress}
        role='button'
        tabIndex={0}
      >
        <ClipboardIcon />
      </div>
      <div className={`${animationClass} fixed-size-box`}>{children}</div>
    </div>
  )
}

export default Animation
