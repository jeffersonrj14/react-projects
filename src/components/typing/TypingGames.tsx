import React, { useState, useEffect } from 'react';

const loremIpsumText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

const TypingGames = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [words, setWords] = useState<string[]>([]);
  const [wrongCount, setWrongCount] = useState(0);
  const [wrongWordsCount, setWrongWordsCount] = useState(0);
  const [correctWords, setCorrectWords] = useState<string[]>([]);
  const [wrongWords, setWrongWords] = useState<string[]>([]);

  useEffect(() => {
    const loremWords = loremIpsumText
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
      .split(' ');

    setWords(loremWords);
  }, []);

  useEffect(() => {
    if (timeRemaining > 0 && !gameOver) {
      const timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setGameOver(true);
    }
  }, [timeRemaining, gameOver]);

  useEffect(() => {
    if (!gameOver) {
      const randomIndex = Math.floor(Math.random() * words.length);
      setCurrentWord(words[randomIndex]);
    }
  }, [gameOver, words]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const typedWord = e.target.value.trim();
    
    if (e.nativeEvent instanceof InputEvent && e.nativeEvent.inputType === 'insertText' && e.nativeEvent.data === ' ') {
      setInputValue('');
      const isCorrect = typedWord === currentWord;
      
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
        setCorrectWords((prevWords) => [...prevWords, currentWord]);
      } else {
        setWrongCount((prevCount) => prevCount + 1);
        setWrongWordsCount((prevCount) => prevCount + 1);
        setWrongWords((prevWords) => [...prevWords, currentWord]);
        
        if (wrongWordsCount >= 4) {
          setGameOver(true);
        }
      }
  
      const randomIndex = Math.floor(Math.random() * words.length);
      setCurrentWord(words[randomIndex]);
    } else {
      setInputValue(e.target.value);
    }
  };

  const restartGame = () => {
    setScore(0);
    setTimeRemaining(60);
    setGameOver(false);
    setWrongCount(0);
    setWrongWordsCount(0);
    setCorrectWords([]);
    setWrongWords([]);
  };

  return (
    <main className='mx-auto my-8 max-w-[872px] px-4 text-stone-300 md:px-0'>
      <h1 className='mt-2 text-4xl font-semibold text-jefferson-light'>Simple Typing Games</h1>
      <h1 className='mt-2 text-xl font-semibold text-gray-400'>Press space to continue to the next word</h1>
      <hr className='my-8 h-1 rounded border-0 bg-gray-700' />
      <div className='flex justify-center'>
        <div className='text-left text-lg'>
          <h1>Typing Game</h1>
          <p>Score: {score}</p>
          <p>Time Remaining: {timeRemaining}</p>
          <input
            className='mt-4 pl-2 text-jefferson-dark rounded-md bg-jefferson-light'
            type='text'
            value={inputValue}
            onChange={handleChange}
            disabled={gameOver}
          />
          <p className='my-4 flex justify-center'>
            Type: &nbsp;<code className='text-jefferson-main'>{currentWord}</code>
          </p>
          {wrongCount >= 5 && (
            <p className='flex justify-center text-red-500'>5 mistakes! Game over.</p>
          )}
          <div className='flex justify-center'>
            {gameOver && (
              <button
                className='my-4 bg-jefferson-light text-jefferson-dark p-1 rounded-md hover:text-jefferson-light hover:bg-jefferson-dark active:bg-jefferson-main active:text-jefferson-dark'
                onClick={restartGame}
              >
                Restart
              </button>
            )}
          </div>
          <ul className='flex justify-center'>
            <p><span className='text-teal-500'>{correctWords.length}</span> | <span className='text-red-500'>{wrongWords.length}</span></p>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default TypingGames;
