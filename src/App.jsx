// import { Button } from '@/components/ui/button';

import { Toaster } from '@/components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppContextProvider } from './context/AppContextProvider.jsx';
import { AppRoutes } from './Routes.jsx';
import { Modal } from './components/organism/Modals/modal.jsx';
function App() {
  const queryClient = new QueryClient();
  return (

    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes/> 
        <Modal/>
        <Toaster />
      </AppContextProvider>
    </QueryClientProvider>

  );
}

export default App;
