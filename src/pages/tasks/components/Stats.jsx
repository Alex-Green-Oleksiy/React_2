import React from 'react';
import styles from '../Task3.module.css';

const Stats = ({ score, attempts }) => {
  return (
    <div className={styles.stats}>
      <div className={styles.statItem}>
        Правильних відповідей: <span className={styles.score}>{score}</span>
      </div>
      <div className={styles.statItem}>
        Спроб: <span className={styles.attempts}>{attempts}</span>
      </div>
    </div>
  );
};

export default Stats;
