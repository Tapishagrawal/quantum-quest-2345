import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LoginPageContextProvider from './context/LoginPageContextProvider.jsx'
import ToggleMenuContextProvider from './context/ToggleMenuContextProvider.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoginPageContextProvider>
    <ToggleMenuContextProvider>
      <BrowserRouter>
      <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
    </ToggleMenuContextProvider>
  </LoginPageContextProvider>
)
