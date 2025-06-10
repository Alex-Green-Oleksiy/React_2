import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../Task1.module.css';
import { MESSAGES } from '../../constants';

const SuccessMessage = ({ message = MESSAGES.LOGIN_SUCCESS }) => (
  <div className={styles.success}>
    <div className={styles.smiley} aria-live="polite">
      {message}
    </div>
  </div>
);

SuccessMessage.propTypes = {
  message: PropTypes.string
};

export default SuccessMessage;
