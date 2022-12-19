import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './components/Counter';
import './styles.css';
import { TabataTimerApp } from './TabataTimerApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TabataTimerApp />
    <CounterApp/>
  </React.StrictMode>,
)
