import React from "react";
import styles from "../Task2.module.css";

const OrderSummary = ({
    ticketClass,
    newspaper,
    cognac,
    snack,
    beerType,
    chips,
}) => {
    return (
        <div className={styles.summary}>
            <h3>Ваш вибір:</h3>
            <ul>
                <li>
                    Клас:{" "}
                    {ticketClass === "business"
                        ? "Бізнес"
                        : ticketClass === "economy"
                        ? "Економ"
                        : "не обрано"}
                </li>
                {ticketClass === "business" && (
                    <>
                        <li>Газета: {newspaper ? "Так" : "Ні"}</li>
                        <li>
                            Коньяк:{" "}
                            {cognac
                                ? "Так" +
                                  (snack ? " (з закускою)" : " (без закуски)")
                                : "Ні"}
                        </li>
                    </>
                )}
                {ticketClass === "economy" && (
                    <>
                        <li>
                            Пиво:{" "}
                            {beerType
                                ? {
                                      light: "Світле",
                                      dark: "Темне",
                                      wheat: "Пшеничне",
                                      nonAlcoholic: "Безалкогольне",
                                  }[beerType]
                                : "не обрано"}
                        </li>
                        <li>Чіпси: {chips ? "Так" : "Ні"}</li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default OrderSummary;
