import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { Dashboard } from './components/Dashboard';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from './components/ui/sonner';

type AppState = 'login' | 'signup' | 'dashboard';

export default function App() {
  const [appState, setAppState] = useState<AppState>('login');

  return (
    <ThemeProvider>
      <div className="size-full">
        {appState === 'login' && (
          <LoginPage
            onLogin={() => setAppState('dashboard')}
            onSwitchToSignup={() => setAppState('signup')}
          />
        )}
        {appState === 'signup' && (
          <SignupPage
            onSignup={() => setAppState('dashboard')}
            onSwitchToLogin={() => setAppState('login')}
          />
        )}
        {appState === 'dashboard' && (
          <Dashboard onLogout={() => setAppState('login')} />
        )}
      </div>
      <Toaster />
    </ThemeProvider>
  );
}