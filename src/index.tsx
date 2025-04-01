import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyles />
      <App />
    </PersistGate>
  </Provider>,
);
