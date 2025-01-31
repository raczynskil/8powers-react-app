import { store } from '@store/store';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppRouter } from './AppRouter';
import { BrowserRouter } from 'react-router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Dane są "świeże" przez 5 minut
      gcTime: 1000 * 60 * 10, // Dane są przechowywane w cache przez 10 minut
      refetchOnReconnect: true, // Automatyczne pobieranie danych po ponownym połączeniu z internetem
      retry: 2, // Liczba prób ponownego pobrania danych w przypadku błędu
    },
  },
});

function App() {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default App;
