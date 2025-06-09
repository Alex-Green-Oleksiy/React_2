import React, { useState, useEffect } from 'react';
import styles from './Task3.module.css';

// Простий масив слів для навчання
const words = [
  { id: 1, word: 'apple', emoji: '🍎', translation: 'яблуко' },
  { id: 2, word: 'cat', emoji: '🐱', translation: 'кіт' },
  { id: 3, word: 'house', emoji: '🏠', translation: 'будинок' },
  { id: 4, word: 'car', emoji: '🚗', translation: 'автомобіль' },
  { id: 5, word: 'book', emoji: '📚', translation: 'книга' },
];

const Task3 = ({ onBack }) => {
  // Стан для поточного слова
  const [currentWord, setCurrentWord] = useState(null);
  // Стан для введеної відповіді
  const [answer, setAnswer] = useState('');
  // Стан для рахунку
  const [score, setScore] = useState(0);
  // Стан для кількості спроб
  const [attempts, setAttempts] = useState(0);
  // Стан для повідомлення
  const [message, setMessage] = useState('');
  // Чи показувати переклад
  const [showTranslation, setShowTranslation] = useState(false);

  // Отримуємо випадкове слово при завантаженні
  useEffect(() => {
    getNewWord();
  }, []);

  // Функція для отримання нового випадкового слова
  const getNewWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentWord(words[randomIndex]);
    setAnswer('');
    setMessage('');
    setShowTranslation(false);
  };

  // Перевірка відповіді
  const checkAnswer = (e) => {
    e.preventDefault();
    
    if (!answer.trim()) {
      setMessage('Будь ласка, введіть відповідь');
      return;
    }

    setAttempts(attempts + 1);

    if (answer.toLowerCase() === currentWord.word.toLowerCase()) {
      setScore(score + 1);
      setMessage('Правильно! Молодець!');
      // Отримуємо нове слово через 1.5 секунди
      setTimeout(() => {
        getNewWord();
      }, 1500);
    } else {
      setMessage('Невірно. Спробуйте ще раз.');
      setShowTranslation(true);
    }
  };

  // Показати правильну відповідь
  const showAnswer = () => {
    setMessage(`Правильна відповідь: ${currentWord.word}`);
    setShowTranslation(true);
    setAnswer(currentWord.word);
  };

  // Якщо слова ще не завантажені
  if (!currentWord) {
    return <div className={styles.loading}>Завантаження...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Вивчаємо англійську</h1>

      <div className={styles.stats}>
        <p>Правильно: <span className={styles.score}>{score}</span></p>
        <p>Спроб: <span className={styles.attempts}>{attempts}</span></p>
      </div>

      <div className={styles.card}>
        <div className={styles.emoji}>{currentWord.emoji}</div>
        
        {showTranslation && (
          <div className={styles.translation}>
            <p>Переклад: {currentWord.translation}</p>
            <p>Англійською: {currentWord.word}</p>
          </div>
        )}

        <form onSubmit={checkAnswer} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="wordInput" className={styles.visuallyHidden}>
              Введіть слово англійською
            </label>
            <input
              id="wordInput"
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className={styles.input}
              placeholder="Введіть слово англійською"
              autoComplete="off"
              required
              maxLength="30"
              aria-required="true"
            />
          </div>
          
          <div className={styles.buttonGroup}>
            <button 
              type="submit" 
              className={`${styles.button} ${styles.checkButton}`}
            >
              Перевірити
            </button>
            
            <button 
              type="button" 
              onClick={showAnswer}
              className={`${styles.button} ${styles.hintButton}`}
            >
              Показати відповідь
            </button>
          </div>
        </form>

        {message && (
          <div 
            className={`${styles.message} ${message.includes('Правильно') ? styles.correctMessage : styles.incorrectMessage} ${styles.visible}`}
          >
            {message}
          </div>
        )}
      </div>

      <button onClick={onBack} className={styles.backButton}>
        ← Назад до списку завдань
      </button>
    </div>
  );
};

export default Task3;
