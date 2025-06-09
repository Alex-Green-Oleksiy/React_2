import React from 'react';
import styles from '../Task2.module.css';

const EconomyServices = ({
    beerType,
    setBeerType,
    chips,
    setChips,
}) => {
    return (
        <div className={styles.options}>
            <h2>Економ послуги</h2>
            <div className={styles.formGroup}>
                <label>Оберіть пиво:</label>
                <select
                    value={beerType}
                    onChange={(e) => setBeerType(e.target.value)}
                    className={styles.select}
                >
                    <option value="">-- Оберіть пиво --</option>
                    <option value="light">Світле</option>
                    <option value="dark">Темне</option>
                    <option value="wheat">Пшеничне</option>
                    <option value="nonAlcoholic">Безалкогольне</option>
                </select>
            </div>
            <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={chips}
                        onChange={(e) => setChips(e.target.checked)}
                    />
                    Чіпси (+20 грн)
                </label>
            </div>
        </div>
    );
};

export default EconomyServices;
