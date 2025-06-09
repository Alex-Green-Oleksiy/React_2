import { useState, useEffect, useRef } from "react";
import {
    FaTasks,
    FaCode,
    FaLaptopCode,
    FaServer,
    FaMobileAlt,
    FaCogs,
    FaGithub,
    FaLinkedin,
    FaTwitter
} from "react-icons/fa";
import "./Home.css";

// Допоміжний компонент для анімації при скролі
const AnimatedSection = ({
    children,
    animation = "fadeIn",
    delay = 0,
    className = "",
    threshold = 0.1
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const currentRef = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`${className} ${
                isVisible ? `animate-${animation}` : "invisible"
            }`}
            style={{
                animationDelay: `${delay}s`,
                animationFillMode: "both"
            }}
        >
            {children}
        </div>
    );
};

const Home = ({ onTaskSelect }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Завантаження...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="home">
            <AnimatedSection animation="slide-top" delay={0.3}>
                <header className="hero">
                    <div className="hero-content">
                        <h1
                            className="gradient-text"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            React Tasks
                            <span
                                style={{
                                    position: "absolute",
                                    right: "-30px",
                                    top: "10px",
                                    fontSize: "24px",
                                    opacity: isHovered ? 1 : 0,
                                    transition: "all 0.3s ease",
                                    transform: isHovered
                                        ? "rotate(10deg) scale(1.2)"
                                        : "rotate(0) scale(1)"
                                }}
                            >
                                🚀
                            </span>
                        </h1>
                        <p className="hero-subtitle">lessons__2</p>
                    </div>
                </header>
            </AnimatedSection>

            <main className="main-content">
                <AnimatedSection animation="fade-in" delay={0.6}>
                    <div className="intro-text">
                        <p>Для перевірки -- дз 1/4/5</p>
                    </div>
                </AnimatedSection>

                <div className="tasks-grid">
                    <AnimatedSection animation="slide-right" delay={0.7}>
                        <button
                            onClick={() => onTaskSelect("task1")}
                            className="feature-card"
                        >
                            <div className="card-content">
                                <div>
                                    <div className="card-icon">
                                        <FaTasks />
                                    </div>
                                    <h3>Завдання 1: Форма входу</h3>
                                    <p>Реалізація форми входу з валідацією.</p>
                                </div>
                                <span className="card-link">До завдання</span>
                            </div>
                        </button>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-right" delay={0.8}>
                        <button
                            onClick={() => onTaskSelect("task2")}
                            className="feature-card"
                        >
                            <div className="card-content">
                                <div>
                                    <div className="card-icon">
                                        <FaCode />
                                    </div>
                                    <h3>Завдання 2: Вибір послуг</h3>
                                    <p>
                                        Інтерактивний вибір послуг на борту
                                        літака.
                                    </p>
                                </div>
                                <span className="card-link">До завдання</span>
                            </div>
                        </button>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-right" delay={0.9}>
                        <button
                            onClick={() => onTaskSelect("task3")}
                            className="feature-card"
                        >
                            <div className="card-content">
                                <div>
                                    <div className="card-icon">
                                        <FaLaptopCode />
                                    </div>
                                    <h3>Завдання 3: Вивчення мови</h3>
                                    <p>
                                        Інтерактивне вивчення мови з перевіркою
                                        відповідей.
                                    </p>
                                </div>
                                <span className="card-link">До завдання</span>
                            </div>
                        </button>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-right" delay={1.0}>
                        <button
                            onClick={() => onTaskSelect("task4")}
                            className="feature-card"
                        >
                            <div className="card-content">
                                <div>
                                    <div className="card-icon">
                                        <FaServer />
                                    </div>
                                    <h3>Завдання 4: Список працівників</h3>
                                    <p>
                                        Вивід списку працівників з можливістю
                                        сортування.
                                    </p>
                                </div>
                                <span className="card-link">До завдання</span>
                            </div>
                        </button>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-right" delay={1.1}>
                        <button
                            onClick={() => onTaskSelect("task5")}
                            className="feature-card"
                        >
                            <div className="card-content">
                                <div>
                                    <div className="card-icon">
                                        <FaMobileAlt />
                                    </div>
                                    <h3>Завдання 5: Пошукова система</h3>
                                    <p>
                                        Інтерфейс пошукової системи з
                                        результатами.
                                    </p>
                                </div>
                                <span className="card-link">До завдання</span>
                            </div>
                        </button>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-right" delay={1.2}>
                        <button
                            onClick={() => onTaskSelect("task6")}
                            className="feature-card"
                        >
                            <div className="card-content">
                                <div>
                                    <div className="card-icon">
                                        <FaCogs />
                                    </div>
                                    <h3>Завдання 6: Налаштування</h3>
                                    <p>
                                        Сторінка налаштувань з різними опціями.
                                    </p>
                                </div>
                                <span className="card-link">До завдання</span>
                            </div>
                        </button>
                    </AnimatedSection>
                </div>
            </main>

            <footer className="footer">
                <div className="footer-content">
                    <p>© 2025. Всі права захищені.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
