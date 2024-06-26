import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'
import { HeadTags } from '../utils/types/HeadTags'
import NotFound from './404'

// Components
import MainIndex from '../components/MainIndex'

// Games
import TypingGames from '../components/games/TypingGames'

// Projects
import TypeEffectProject from '../components/projects/TypingEffect/TypeEffectMain'
import CalculatorMain from '../components/projects/Calculator/CalculatorMain'
import SnippetMain from '../components/projects/CodeSnippet/SnippetMain'

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

  const TypeEffect: HeadTags = {
    title: 'Typing Effect',
    description: 'Displaying text being typed onto the screen',
    og: {
      title: 'Typing Effect',
      description: 'Displaying text being typed onto the screen',
      alt: 'Typing Effect'
    },
    noindex: false
  }
  const Calculator: HeadTags = {
    title: 'Calculator',
    description: 'Calculator',
    og: {
      title: 'Calculator',
      description: 'Calculator',
      alt: 'Calculator'
    },
    noindex: false
  }
  const Snippet: HeadTags = {
    title: 'Code Snippet',
    description: 'Code Snippet',
    og: {
      title: 'Code Snippet',
      description: 'Code Snippet',
      alt: 'Code Snippet'
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
        {/* projects */}
        <Route
          path='/projects/typingeffect'
          element={
            <DefaultLayout seoProps={TypeEffect}>
              <TypeEffectProject />
            </DefaultLayout>
          }
        />
        {/* snippet */}
        <Route
          path='/projects/codesnippet'
          element={
            <DefaultLayout seoProps={Snippet}>
              <SnippetMain />
            </DefaultLayout>
          }
        />
        {/* calculator */}
        <Route
          path='/projects/calculator'
          element={
            <DefaultLayout seoProps={Calculator}>
              <CalculatorMain />
            </DefaultLayout>
          }
        />
        {/* Games */}
        <Route
          path='/games/typing'
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
