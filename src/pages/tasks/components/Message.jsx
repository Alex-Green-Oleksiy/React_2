import React from 'react';
import styles from '../Task3.module.css';

const Message = ({ message, isCorrect }) => {
  if (!message) return null;
  
  return (
    <p className={`${styles.message} ${isCorrect ? styles.correctMessage : styles.incorrectMessage}`}>
      {message}
    </p>
  );
};

export default Message;
