import React from 'react';
import styles from '../Task3.module.css';

const WordCard = ({ currentWord, showTranslation }) => {
  return (
    <div className={styles.imageContainer}>
      <span className={styles.emoji} role="img" aria-label={currentWord.translation}>
        {currentWord.image}
      </span>
      <p className={styles.translation}>
        {showTranslation ? currentWord.translation : '???'}
      </p>
    </div>
  );
};

export default WordCard;
