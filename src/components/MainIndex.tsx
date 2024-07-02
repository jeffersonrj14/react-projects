import { Link } from 'react-router-dom'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import { availableProjects } from '../data/availableProjects'
import { availableGames } from '../data/availableGames'
import { frontendmentorSolution } from '../data/frontendmentorSolution'

const MainIndex = () => {
  return (
    <div className='text-jefferson-light font-mono'>
      <h1 className='font-bold text-lg mb-2'>Projects</h1>
      <hr className='mb-8 h-0.5 rounded border-0 bg-gray-700' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-lg justify-center'>
        {availableProjects.map((projects, index) => (
          <Link key={projects.url} to={`/${projects.url}`} className='link text-left'>
            <span className='mr-2 opacity-50'>{(index + 1).toString().padStart(3, '0')}</span>
            <span className=''>{projects.title}</span>
          </Link>
        ))}
      </div>
      <h1 className='mt-16 font-bold text-lg mb-2'>Games</h1>
      <hr className='mb-8 h-0.5 rounded border-0 bg-gray-700' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-lg justify-center'>
        {availableGames.map((games, index) => (
          <Link key={games.url} to={`/${games.url}`} className='link text-left'>
            <span className='mr-2 opacity-50'>{(index + 1).toString().padStart(3, '0')}</span>
            <span className=''>{games.title}</span>
          </Link>
        ))}
      </div>
      <h1 className='mt-16 font-bold text-lg mb-2'>Front End Mentor Solution</h1>
      <hr className='mb-8 h-0.5 rounded border-0 bg-gray-700' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-lg justify-center'>
        {frontendmentorSolution.map((solution, index) => (
          <div key={solution.url} className='relative'>
            <Link to={`${solution.url}`} target='_blank' className='link text-left'>
              <span className='mr-2 opacity-50'>{(index + 1).toString().padStart(3, '0')}</span>
              <div className='flex flex-col'>
                <span>{solution.title}</span>
                <span className='text-sm'>{solution.subTitle}</span>
              </div>
            </Link>
            <a
              href={solution.repo}
              target='_blank'
              rel='noopener noreferrer'
              className='link absolute left-10 top-0 mt-1'
            >
              <FaGithub />
            </a>
            <a
              href={solution.link}
              target='_blank'
              rel='noopener noreferrer'
              className='link absolute left-16 top-0 mt-1'
            >
              <FaGlobe />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainIndex
