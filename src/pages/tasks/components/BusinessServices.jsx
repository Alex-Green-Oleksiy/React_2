import React from 'react';
import styles from '../Task2.module.css';

const BusinessServices = ({
    newspaper,
    setNewspaper,
    cognac,
    setCognac,
    snack,
    setSnack,
}) => {
    return (
        <div className={styles.options}>
            <h2>Бізнес послуги</h2>
            <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={newspaper}
                        onChange={(e) => setNewspaper(e.target.checked)}
                    />
                    Газета
                </label>
                <label className={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={cognac}
                        onChange={(e) => setCognac(e.target.checked)}
                    />
                    Коньяк
                </label>
                {cognac && (
                    <div className={styles.snackOptions}>
                        <p>Бажаєте закуску до коньяку?</p>
                        <div>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="snack"
                                    checked={snack}
                                    onChange={() => setSnack(true)}
                                />
                                Так
                            </label>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="snack"
                                    checked={!snack}
                                    onChange={() => setSnack(false)}
                                />
                                Ні
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BusinessServices;
