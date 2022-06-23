import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/store/store';
import { Routes } from './src/navigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;