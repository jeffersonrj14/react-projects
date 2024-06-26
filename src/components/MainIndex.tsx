import { Link } from 'react-router-dom'

const availableProjects = [
  {
    url: 'projects/typingeffect',
    title: 'Typing'
  },
  {
    url: 'projects/codesnippet',
    title: 'Code Snippet'
  }
  // {
  //   url: 'projects/calculator',
  //   title: 'Calculator'
  // }
]
const availableGames = [
  {
    url: 'games/typing',
    title: 'Typing'
  }
]

const MainIndex = () => {
  return (
    <div className='text-jefferson-light'>
      <h1 className='font-bold text-lg mb-2'>Projects</h1>
      <hr className='mb-8 h-0.5 rounded border-0 bg-gray-700' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-lg justify-center'>
        {availableProjects.map((projects, index) => (
          <Link key={projects.url} to={`/${projects.url}`} className='link flex mx-auto text-left'>
            <span className='mr-2 opacity-50'>{(index + 1).toString().padStart(3, '0')}</span>
            <span className=''>{projects.title}</span>
          </Link>
        ))}
      </div>
      <h1 className='mt-16 font-bold text-lg mb-2'>Games</h1>
      <hr className='mb-8 h-0.5 rounded border-0 bg-gray-700' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-lg justify-center'>
        {availableGames.map((games, index) => (
          <Link key={games.url} to={`/${games.url}`} className='link flex mx-auto text-left'>
            <span className='mr-2 opacity-50'>{(index + 1).toString().padStart(3, '0')}</span>
            <span className=''>{games.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MainIndex
