import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { store } from './store';
import { ThemeProvider } from './theme/ThemeContext';
import AppRouter from './router/AppRouter';
import SmoothScroll from './components/common/SmoothScroll';
import './theme/gradientText.css';
import './theme/responsive.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <HelmetProvider>
          <Router>
            <SmoothScroll>
              <AppRouter />
            </SmoothScroll>
          </Router>
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
