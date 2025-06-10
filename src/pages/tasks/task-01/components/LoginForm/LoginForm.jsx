import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../Task1.module.css';
import { ERROR_TYPES } from '../../constants';

const LoginForm = ({ formData, onInputChange, onSubmit, error }) => {
  const { login, password } = formData;
  const { message: errorMessage, type: errorType = ERROR_TYPES.DEFAULT } = error || {};

  // Отримуємо клас для помилки в залежності від її типу
  const getErrorClassName = () => {
    switch(errorType) {
      case ERROR_TYPES.IVAN:
        return styles.ivanError;
      case ERROR_TYPES.OTHER:
        return styles.otherError;
      default:
        return styles.error;
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {errorMessage && (
        <div className={`${styles.error} ${getErrorClassName()}`}>
          {errorMessage}
        </div>
      )}
      
      <div className={styles.inputGroup}>
        <label htmlFor="login" className={styles.label}>
          Логін:
        </label>
        <input
          id="login"
          name="login"
          type="text"
          value={login}
          onChange={onInputChange}
          className={styles.input}
          placeholder="Введіть логін"
          autoComplete="username"
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>
          Пароль:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={onInputChange}
          className={styles.input}
          placeholder="Введіть пароль"
          autoComplete="current-password"
        />
      </div>

      <button type="submit" className={styles.button}>
        Увійти
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  formData: PropTypes.shape({
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
    type: PropTypes.oneOf(Object.values(ERROR_TYPES))
  })
};

export default LoginForm;
