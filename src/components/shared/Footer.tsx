import { FaReact } from 'react-icons/fa'
import { SiVite, SiTypescript, SiTailwindcss } from 'react-icons/si'
import IconwLink from './IconwLink'

interface IconLink {
  url: string
  icon: JSX.Element
  style: string
}

const IconLink: IconLink[] = [
  {
    url: 'https://vitejs.dev/',
    icon: <SiVite />,
    style: 'text-gray-400 hover:text-[#FBC02D] active:text-[#9575CD] transition-300'
  },
  {
    url: 'https://react.dev/',
    icon: <FaReact />,
    style: 'text-gray-400 hover:text-[#80DEEA] active:text-[#00d8ff] transition-300'
  },
  {
    url: 'https://www.typescriptlang.org/docs/',
    icon: <SiTypescript />,
    style: 'text-gray-400 hover:text-[#007acc] active:text-white/80 transition-300'
  },
  {
    url: 'https://tailwindcss.com/',
    icon: <SiTailwindcss />,
    style: 'text-gray-400 hover:text-[#06b6d4] active:text-[#6d28d9] transition-300'
  }
]

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className='mx-auto my-8 pt-16 max-w-[872px] bottom-0 px-4 text-stone-300 md:px-0'>
      <p>
        &copy;2024-{year}&nbsp;
        <a
          className='text-jefferson-light hover:text-jefferson-light'
          href='https://github.com/jeffersonrj14'
        >
          RJ Jefferson
        </a>
      </p>
      <nav role='navigation'>
        <ul className='flex flex-row justify-center gap-2 mt-1 text-lg'>
          {IconLink.map((icon) => (
            <li key={icon.url}>
              <IconwLink href={icon.url} icon={icon.icon} className={icon.style} />
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
