import React, { useState } from "react";
import styles from "./Task2.module.css";

// Імпортуємо компоненти
import TicketClassSelector from "./components/TicketClassSelector";
import BusinessServices from "./components/BusinessServices";
import EconomyServices from "./components/EconomyServices";
import OrderSummary from "./components/OrderSummary";

const Task2 = ({ onBack }) => {
    const [ticketClass, setTicketClass] = useState("");
    const [newspaper, setNewspaper] = useState(false);
    const [cognac, setCognac] = useState(false);
    const [snack, setSnack] = useState(false);
    const [beerType, setBeerType] = useState("");
    const [chips, setChips] = useState(false);

    const handleClassChange = (e) => {
        const selectedClass = e.target.value;
        setTicketClass(selectedClass);
        // Скидаємо всі стани при зміні класу
        if (selectedClass !== "business") {
            setNewspaper(false);
            setCognac(false);
            setSnack(false);
        }
        if (selectedClass !== "economy") {
            setBeerType("");
            setChips(false);
        }
    };

    return (
        <div
            className={`${styles.container} ${
                ticketClass === "business" ? styles.businessBg : ""
            } ${ticketClass === "economy" ? styles.economyBg : ""}`}
        >
            <div className={styles.content}>
                <h1>Завдання 2: Вибір послуг на борту</h1>

                <TicketClassSelector
                    ticketClass={ticketClass}
                    onClassChange={handleClassChange}
                />

                {ticketClass === "business" && (
                    <BusinessServices
                        newspaper={newspaper}
                        setNewspaper={setNewspaper}
                        cognac={cognac}
                        setCognac={setCognac}
                        snack={snack}
                        setSnack={setSnack}
                    />
                )}

                {ticketClass === "economy" && (
                    <EconomyServices
                        beerType={beerType}
                        setBeerType={setBeerType}
                        chips={chips}
                        setChips={setChips}
                    />
                )}

                <OrderSummary
                    ticketClass={ticketClass}
                    newspaper={newspaper}
                    cognac={cognac}
                    snack={snack}
                    beerType={beerType}
                    chips={chips}
                />

                <button onClick={onBack} className={styles.backButton}>
                    ← Назад до списку завдань
                </button>
            </div>
        </div>
    );
};

export default Task2;
