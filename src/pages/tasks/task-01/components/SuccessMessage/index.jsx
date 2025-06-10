import React from 'react';
import PropTypes from 'prop-types';
import styles from '../SuccessMessage/SuccessMessage.module.css';

function SuccessMessage() {
  return (
    <div className={styles.success}>
      <h3>Вітаємо!</h3>
      <p>Ви успішно увійшли в систему 😊</p>
    </div>
  );
}

export default SuccessMessage;
