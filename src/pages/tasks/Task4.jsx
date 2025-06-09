import React, { useState } from "react";
import styles from "./Task4.module.css";

const Task4 = ({ onBack }) => {
    const [workers] = useState([
        {
            id: "worker-1",
            name: "Іванов",
            salary: 10000,
        },
        {
            id: "worker-2",
            name: "Петров",
            salary: 20000,
        },
        {
            id: "worker-3",
            name: "Сидоров",
            salary: 50000,
        },
    ]);

    // Форматуємо зарплату з розділенням розрядів
    const formatSalary = (salary) => {
        return salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    return (
        <div className={styles.container}>
            <h1>Список працівників</h1>


            <ul>
                {workers.map((worker) => (
                    <li key={worker.id}>
                        {worker.name}: {formatSalary(worker.salary)} грн
                    </li>
                ))}
            </ul>


            <button onClick={onBack} className={styles.backButton}>
                ← Назад до списку завдань
            </button>
        </div>
    );
};

export default Task4;
