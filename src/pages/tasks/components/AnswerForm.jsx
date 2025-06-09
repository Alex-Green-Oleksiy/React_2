import React from 'react';
import styles from '../Task3.module.css';

const AnswerForm = ({
  userAnswer,
  setUserAnswer,
  checkAnswer,
  handleNextWord,
  handleGiveUp,
  isCorrect,
  disabled,
  autoFocus = false,
}) => {
  return (
    <form onSubmit={checkAnswer} className={styles.form}>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Введіть англійське слово"
        className={styles.input}
        disabled={disabled}
        autoFocus={autoFocus}
      />
      
      <div className={styles.buttonGroup}>
        <button 
          type="submit" 
          className={`${styles.button} ${styles.checkButton}`}
          disabled={disabled}
        >
          Перевірити
        </button>
        
        {!isCorrect && (
          <button 
            type="button" 
            className={`${styles.button} ${styles.nextButton}`}
            onClick={handleGiveUp}
          >
            Не знаю
          </button>
        )}
        
        {isCorrect && (
          <button 
            type="button" 
            className={`${styles.button} ${styles.nextButton}`}
            onClick={handleNextWord}
          >
            Наступне слово
          </button>
        )}
      </div>
    </form>
  );
};

export default AnswerForm;
