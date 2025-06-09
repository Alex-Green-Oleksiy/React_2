import React, { useState } from "react";
import styles from "./Task1.module.css";

const Task1 = ({ onBack }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState("");

    const CORRECT_LOGIN = "admin";
    const CORRECT_PASSWORD = "12345";

    const handleSubmit = (e) => {
        e.preventDefault();

        if (login === CORRECT_LOGIN && password === CORRECT_PASSWORD) {
            setIsAuthenticated(true);
            setError("");
        } else {
            setIsAuthenticated(false);
            if (login === "Іван") {
                setError("Помилка! Спробуйте ще раз.");
            } else {
                setError("Невірний логін або пароль");
            }
        }
    };

    return (
        <>
            <div className={styles.loginContainer}>
                <h1>Вхід до системи</h1>

                {isAuthenticated ? (
                    <div className={styles.success}>
                        <span className={styles.successEmoji} role="img" aria-label="Успіх">🎉</span>
                        <p>Вітаємо, ви успішно увійшли!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label>
                                Логін
                                <input
                                    type="text"
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                    className={styles.input}
                                />
                            </label>
                        </div>

                        <div className={styles.formGroup}>
                            <label>
                                Пароль
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className={styles.input}
                                />
                            </label>
                        </div>

                        {error && (
                            <div
                                className={
                                    login === "Іван"
                                        ? styles.errorBlue
                                        : styles.errorRed
                                }
                            >
                                {error}
                            </div>
                        )}

                        <button type="submit" className={styles.button}>
                            Увійти
                        </button>
                    </form>
                )}
            </div>

            <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
                <button onClick={onBack} className={styles.backButton}>
                    ← Назад до списку завдань
                </button>
            </div>
        </>
    );
};

export default Task1;
