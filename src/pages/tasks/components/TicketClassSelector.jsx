import React from 'react';
import styles from '../Task2.module.css';

const TicketClassSelector = ({ ticketClass, onClassChange }) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor="ticketClass">Оберіть клас квитка:</label>
            <select
                id="ticketClass"
                value={ticketClass}
                onChange={onClassChange}
                className={styles.select}
            >
                <option value="">-- Оберіть клас --</option>
                <option value="business">Бізнес клас</option>
                <option value="economy">Економ клас</option>
            </select>
        </div>
    );
};

export default TicketClassSelector;
