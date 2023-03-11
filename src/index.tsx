import ReactDOM from 'react-dom/client'
import {App} from './App'
import { ModalState } from './context/ModalContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ModalState>
    <App />
  </ModalState>
)
