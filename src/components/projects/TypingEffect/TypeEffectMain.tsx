import TypingEffect from './TypingEffect'
import { loremipsum } from '../../../utils/lorem'

const TypeEffectProject = () => {
  return (
    <main className='mx-auto my-8 max-w-[872px] px-4 text-stone-300 md:px-0'>
      <a href='/' className='font-light text-gray-300'>
        {' '}
        &larr; Back to projects list
      </a>
      <h1 className='mt-2 text-4xl font-semibold text-jefferson-light'>Typing Effect</h1>
      <h1 className='mt-2 text-xl font-semibold text-gray-400'>
        Displaying text being typed onto the screen
      </h1>
      <hr className='my-8 h-1 rounded border-0 bg-gray-700' />
      <div className='flex items-center justify-center text-white'>
        <h1 className='text-3xl font-mono'>
          <TypingEffect text={loremipsum} speed={15} />
        </h1>
      </div>
    </main>
  )
}

export default TypeEffectProject
