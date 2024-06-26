import Animation from './Animation'
import './styles/animation.css'

import loader from './data/SnippetData'

interface SnippetAnim {
  animationClass: string
  animationCSS: string
}

function SnippetMain() {
  return (
    <main className='mx-auto my-8 max-w-[872px] px-4 text-stone-300 md:px-0'>
      <a href='/' className='font-light text-gray-300'>
        {' '}
        &larr; Back to projects list
      </a>
      <h1 className='mt-2 text-4xl font-semibold text-jefferson-light'>Code Snippet</h1>
      <h1 className='mt-2 text-xl font-semibold text-gray-400'>CSS code snippet short version</h1>
      <hr className='my-8 h-1 rounded border-0 bg-gray-700' />
      {/*  */}
      <div className='flex flex-col items-center justify-center text-white'>
        <h2 className='text-md sm:text-xl font-mono pb-4'>
          &lt;div&nbsp;class=&quot;loader&quot;&gt;&lt;div&gt;
        </h2>
        <h1 className='text-3xl font-mono'>
          <div className=' flex flex-col items-center justify-center space-y-6'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {loader.map((anim: SnippetAnim, index: number) => (
                <Animation
                  key={index}
                  animationClass={anim.animationClass}
                  animationCSS={anim.animationCSS}
                ></Animation>
              ))}
            </div>
          </div>
        </h1>
      </div>
      {/*  */}
    </main>
  )
}

export default SnippetMain
