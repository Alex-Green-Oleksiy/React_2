import { useState } from 'react';
import styles from './Task6.module.css';

// Початкові дані про страви
const DISHES = [
  { id: 1, name: 'Борщ', prepTime: 25, price: 120 },
  { id: 2, name: 'Піца Маргарита', prepTime: 20, price: 180 },
  { id: 3, name: 'Салат Цезар', prepTime: 15, price: 150 },
  { id: 4, name: 'Пельмені', prepTime: 15, price: 90 },
  { id: 5, name: 'Стейк з яловичини', prepTime: 30, price: 320 },
  { id: 6, name: 'Паста Карбонара', prepTime: 20, price: 160 },
];

// Генератор унікальних ID
let nextId = 100;

const Task6 = ({ onBack }) => {
  // Стан для трьох списків замовлень
  const [waitingList, setWaitingList] = useState([]);
  const [processingList, setProcessingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  
  // Вибрана страва для додавання
  const [selectedDish, setSelectedDish] = useState(DISHES[0].id);
  
  // Кількість страв для додавання
  const [quantity, setQuantity] = useState(1);
  
  // Додати нове замовлення до списку очікування
  const addNewOrder = () => {
    if (quantity < 1) return;
    
    const dish = DISHES.find(d => d.id === selectedDish);
    const newOrders = Array(quantity).fill().map(() => ({
      id: nextId++,
      dish: { ...dish },
      status: 'waiting'
    }));
    
    setWaitingList(prev => [...prev, ...newOrders]);
    setQuantity(1);
  };
  
  // Перемістити замовлення з одного списку в інший
  const moveOrder = (orderId, fromList, toList, setFromList, setToList, status) => {
    const order = fromList.find(o => o.id === orderId);
    if (!order) return;
    
    const updatedOrder = {
      ...order,
      status
    };
    
    setFromList(prev => prev.filter(o => o.id !== orderId));
    setToList(prev => [...prev, updatedOrder]);
  };
  
  // Видалити замовлення
  const removeOrder = (orderId, fromList, setFromList) => {
    setFromList(prev => prev.filter(o => o.id !== orderId));
  };
  
  // Обробники подій для кнопок
  const handleStartCooking = (orderId) => {
    moveOrder(
      orderId, 
      waitingList, 
      processingList, 
      setWaitingList, 
      setProcessingList, 
      'processing'
    );
  };
  
  const handleCompleteCooking = (orderId) => {
    moveOrder(
      orderId, 
      processingList, 
      completedList, 
      setProcessingList, 
      setCompletedList, 
      'completed'
    );
  };
  
  const handleServe = (orderId) => {
    removeOrder(orderId, completedList, setCompletedList);
  };
  

  // Рендер списку замовлень
  const renderOrderList = (orders, title, actionButton, onActionClick) => (
    <div className={styles.orderList}>
      <h3>{title} ({orders.length})</h3>
      {orders.length === 0 ? (
        <p className={styles.emptyList}>Немає замовлень</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id} className={styles.orderItem}>
              <div className={styles.orderInfo}>
                <div className={styles.dishName}>{order.dish.name}</div>
                <div className={styles.orderMeta}>
                  <span>ID: {order.id}</span>
                  <span>{order.dish.price} грн</span>
                </div>
              </div>
              {actionButton && (
                <button 
                  className={`${styles.actionButton} ${styles[actionButton.className]}`}
                  onClick={() => onActionClick(order.id)}
                >
                  {actionButton.text}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className={styles.container}>
      <h1>Кухонний диспетчер</h1>
      
      <div className={styles.controls}>
        <div className={styles.formGroup}>
          <label htmlFor="dish">Страва:</label>
          <select 
            id="dish" 
            value={selectedDish}
            onChange={(e) => setSelectedDish(parseInt(e.target.value))}
            className={styles.select}
          >
            {DISHES.map(dish => (
              <option key={dish.id} value={dish.id}>
                {dish.name} ({dish.price} грн, {dish.prepTime} хв)
              </option>
            ))}
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="quantity">Кількість:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className={styles.input}
          />
        </div>
        
        <button 
          onClick={addNewOrder}
          className={styles.addButton}
          title="Додати нове замовлення"
        >
          Додати замовлення
        </button>
      </div>
      
      <div className={styles.ordersContainer}>
        {/* Очікують на виконання */}
        {renderOrderList(
          waitingList, 
          '🕒 Очікують на виконання',
          { text: 'Готувати', className: 'cookButton' },
          handleStartCooking
        )}
        
        {/* Виконуються */}
        {renderOrderList(
          processingList, 
          '👨‍🍳 Виконуються',
          { text: 'Готово', className: 'completeButton' },
          handleCompleteCooking
        )}
        
        {/* Готові до виносу */}
        {renderOrderList(
          completedList, 
          '✅ Готові до виносу',
          { text: 'Подано', className: 'serveButton' },
          handleServe
        )}
      </div>
      
      <button onClick={onBack} className={styles.backButton}>
        ← Назад до списку завдань
      </button>
    </div>
  );
};

export default Task6;
