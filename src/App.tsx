import { useState } from 'react';
import { EmailContext } from './context';
import HomePage from './pages/HomePage';

function App() {
    const [registeredEmail, setRegisteredEmail] = useState<string>('');

  return (
    <EmailContext.Provider value={{ registeredEmail, setRegisteredEmail }}>
      <HomePage />
    </EmailContext.Provider>
  );
}

export default App;
