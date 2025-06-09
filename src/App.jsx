import { useState } from 'react';
import Home from './pages/Home/Home';
import Task1 from './pages/tasks/Task1';
import Task2 from './pages/tasks/Task2';
import Task3 from './pages/tasks/Task3';
import Task4 from './pages/tasks/Task4';
import Task5 from './pages/tasks/Task5';
import Task6 from './pages/tasks/Task6';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onTaskSelect={setCurrentView} />;
      case 'task1':
        return <Task1 onBack={() => setCurrentView('home')} />;
      case 'task2':
        return <Task2 onBack={() => setCurrentView('home')} />;
      case 'task3':
        return <Task3 onBack={() => setCurrentView('home')} />;
      case 'task4':
        return <Task4 onBack={() => setCurrentView('home')} />;
      case 'task5':
        return <Task5 onBack={() => setCurrentView('home')} />;
      case 'task6':
        return <Task6 onBack={() => setCurrentView('home')} />;
      default:
        return <Home onTaskSelect={setCurrentView} />;
    }
  };

  return (
    <div className="app">
      {currentView !== 'home' && (
        <nav>
          <button onClick={() => setCurrentView('home')} className="nav-button">
            ← Назад на головну
          </button>
        </nav>
      )}
      <main>
        {renderView()}
      </main>
    </div>
  );
}

export default App;
