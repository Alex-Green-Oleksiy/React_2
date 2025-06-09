import React, { useState, useEffect } from "react";
import styles from "./Task5.module.css";

const Task5 = ({ onBack }) => {
    // Стан для зберігання результатів пошуку
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // Масив даних з результатами пошуку
        const websites = [
            {
                id: 1,
                title: "React - Бібліотека для створення користувацьких інтерфейсів",
                url: "https://uk.legacy.reactjs.org/",
                description:
                    "React робить створення інтерактивних користувацьких інтерфейсів безболісним. Проектуйте прості види для кожного стану у вашому додатку, і React ефективно оновлюватиме та рендеритиме лише потрібні компоненти, коли змінюються ваші дані.",
                displayUrl: "uk.legacy.reactjs.org",
                lastUpdated: "Оновлено 2 дні тому",
            },
            {
                id: 2,
                title: "Документація React - Початок роботи",
                url: "https://uk.react.dev/learn",
                description:
                    "Вивчіть React - бібліотеку JavaScript для створення користувацьких інтерфейсів. Почніть з основ створення інтерактивних веб-додатків за допомогою компонентів та хуків.",
                displayUrl: "uk.react.dev/learn",
                lastUpdated: "Офіційна документація",
            },
            {
                id: 3,
                title: "React - Навчальний посібник для початківців | MDN",
                url: "https://developer.mozilla.org/uk/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
                description:
                    "Повний посібник для початківців з вивчення React. Від встановлення до створення першого додатку. Включає основні концепції, компоненти, стан та життєвий цикл.",
                displayUrl: "developer.mozilla.org/.../React_getting_started",
                lastUpdated: "MDN Web Docs",
            },
            {
                id: 4,
                title: "React Tutorial - W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP",
                description:
                    "React - це бібліотека JavaScript для створення користувацьких інтерфейсів. React використовується для побудови односторінкових додатків. React дозволяє створювати багаторазові компоненти UI.",
                displayUrl: "w3schools.com/react",
                lastUpdated: "Навчальний посібник",
            },
            {
                id: 5,
                title: "React на GitHub",
                url: "https://github.com/facebook/react",
                description:
                    "React - це декларативна, ефективна та гнучка JavaScript бібліотека для створення користувацьких інтерфейсів. Вона дозволяє вам створювати складні UI з невеликих та ізольованих фрагментів коду, які називаються компонентами.",
                displayUrl: "github.com/facebook/react",
                lastUpdated: "Відкрите програмне забезпечення",
            },
        ];
        
        setSearchResults(websites);
    }, []); // Порожній масив залежностей - ефект виконається лише раз при монтажі

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <div className={styles.header}>
                    <h1 className={styles.logo}>
                        <span className={styles.blue}>Г</span>
                        <span className={styles.red}>у</span>
                        <span className={styles.yellow}>л</span>
                        <span className={styles.blue}>і</span>
                        <span className={styles.green}>-</span>
                        <span className={styles.red}>г</span>
                        <span className={styles.red}>у</span>
                        <span className={styles.yellow}>л</span>
                        <span className={styles.blue}>і</span>
                    </h1>

                    <div className={styles.searchForm}>
                        <div className={styles.searchBox}>
                            <input
                                type="text"
                                className={styles.searchInput}
                                value="React навчання, або що таке біль"
                                readOnly
                                aria-label="Пошуковий запит"
                            />
                            <div className={styles.searchButtons}>
                                <button className={styles.searchButton}>
                                    Пошук Гуляє
                                </button>
                                <button className={styles.luckyButton}>
                                    Мені не пощастить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.resultsContainer}>
                    <p className={styles.resultsCount}>
                        Приблизно {searchResults.length} результатів (0.42 секунди)
                    </p>

                    {searchResults.map((result) => (
                        <div
                            key={result.id}
                            className={styles.searchResult}
                        >
                            <div className={styles.resultHeader}>
                                <div className={styles.resultUrl}>
                                    {result.displayUrl}
                                </div>
                                <h2 className={styles.resultTitle}>
                                    <a href={result.url}>
                                        {result.title}
                                    </a>
                                </h2>
                            </div>
                            <div className={styles.resultDescription}>
                                {result.description}
                            </div>
                            <div className={styles.resultFooter}>
                                <span className={styles.lastUpdated}>
                                    {result.lastUpdated}
                                </span>
                            </div>
                        </div>
                    ))}

                    <div className={styles.relatedSearches}>
                        <h3>Схожі запити</h3>
                        <div className={styles.relatedLinks}>
                            <a key="beginner" href="#">
                                react навчання для початківців
                            </a>
                            <a key="ukrainian" href="#">react українською</a>
                            <a key="examples" href="#">react приклади</a>
                            <a key="docs" href="#">react документація</a>
                        </div>
                    </div>

                    <div className={styles.pagination}>
                        <div className={styles.paginationLogo}>
                            <span className={styles.blue}>G</span>
                            <span className={styles.red}>o</span>
                            <span className={styles.yellow}>o</span>
                            <span className={styles.blue}>g</span>
                            <span className={styles.green}>l</span>
                            <span className={styles.red}>e</span>
                            <span className={styles.blue}>&gt;</span>
                        </div>
                        <div className={styles.pages}>
                            <span key="page-1" className={styles.active}>1</span>
                            <a key="page-2" href="#">2</a>
                            <a key="page-3" href="#">3</a>
                            <a key="page-4" href="#">4</a>
                            <a key="page-5" href="#">5</a>
                            <a key="page-6" href="#">6</a>
                            <a key="page-7" href="#">7</a>
                            <a key="page-8" href="#">8</a>
                            <a key="page-9" href="#">9</a>
                            <a key="page-10" href="#">10</a>
                            <a href="#" className={styles.next}>
                                Наступна <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={onBack} className={styles.backButton}>
                ← Назад до списку завдань
            </button>
        </div>
    );
};

export default Task5;
