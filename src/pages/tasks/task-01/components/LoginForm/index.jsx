import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoginForm.module.css';

const LoginForm = ({
  login,
  password,
  onLoginChange,
  onPasswordChange,
  onSubmit,
  error,
  errorType = 'default'
}) => {
  const getErrorClassName = () => {
    switch(errorType) {
      case 'ivan':
        return styles.ivanError;
      case 'other':
        return styles.otherError;
      default:
        return '';
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {error && (
        <div className={`${styles.error} ${getErrorClassName()}`}>
          {error}
        </div>
      )}
      
      <div className={styles.formGroup}>
        <label>
          Логін:
          <input
            type="text"
            value={login}
            onChange={onLoginChange}
            className={styles.input}
          />
        </label>
      </div>
      
      <div className={styles.formGroup}>
        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={onPasswordChange}
            className={styles.input}
          />
        </label>
      </div>

      <button type="submit" className={styles.button}>
        Увійти
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onLoginChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  errorType: PropTypes.oneOf(['default', 'ivan', 'other'])
};

export default LoginForm;
