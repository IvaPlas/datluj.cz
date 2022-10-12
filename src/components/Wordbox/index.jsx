import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word, onFinish }) => {
  const [lettersLeft, setLettersLeft] = useState(word);

  const handleKeyUp = (e) => {
    let newWord = lettersLeft.slice(1);
    console.log(e);
    if (e.key === lettersLeft[0]) {
      setLettersLeft(newWord);
    }
    if (newWord.lenght === 0) {
      onFinish();
    }

    useEffect(() => {
      document.addEventListener('keyup', handleKeyUp);
      return () => {
        document.removeEventListener('keyup', handleKeyUp);
      };
    }, [lettersLeft]);

    return <div className="wordbox">{lettersLeft}</div>;
  };
};

export default Wordbox;
