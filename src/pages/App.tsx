import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'
import { HeadTags } from '../utils/types/HeadTags'
import NotFound from './404'

// Components
import MainIndex from '../components/MainIndex'
import TypingGames from '../components/typing/TypingGames'

function App() {
  const seoProps: HeadTags = {
    title: 'Home',
    description: "RJ Jefferson's Projects",
    og: {
      title: 'Home',
      description: "RJ Jefferson's Projects",
      alt: 'Projects'
    },
    noindex: false
  }
  const NotFoundPage: HeadTags = {
    title: '404: Not Found',
    description: 'router not found',
    og: {
      title: '404: Not Found',
      description: 'router not found',
      alt: '404'
    },
    noindex: false
  }

  const Typing: HeadTags = {
    title: 'Typing Games',
    description: 'Typing Games',
    og: {
      title: 'Typing Games',
      description: 'Typing Games',
      alt: 'Typing Games'
    },
    noindex: false
  }

  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route
          path='/'
          element={
            <DefaultLayout seoProps={seoProps}>
              <MainIndex />
            </DefaultLayout>
          }
        />
        {/* Project */}
        <Route
          path='/projects/typing'
          element={
            <DefaultLayout seoProps={Typing}>
              <TypingGames />
            </DefaultLayout>
          }
        />
        {/* 404 Not Found Page */}
        <Route
          path='*'
          element={
            <DefaultLayout seoProps={NotFoundPage}>
              <NotFound />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
