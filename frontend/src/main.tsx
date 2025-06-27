
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider  } from 'react-redux'  
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import App from './App.tsx'
import Login from './pages/Login/login.tsx';
import Dashboard from './pages/Dashboard/dashboard.tsx';
import ProtectedRoute from './routes/ProtectedRoute.tsx';
import store from './store/store.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

