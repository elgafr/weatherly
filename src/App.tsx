import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"; // Make sure the path is correct
import { ThemeProvider } from "./context/theme-provider";
import Layout from "./components/layout";
import WeatherDashboard from "./pages/weather-dashboard";
import CityPage from "./pages/city-page";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>

    
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<WeatherDashboard />} />
            <Route path="/city/:cityName" element={<CityPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>

  );
}

export default App;
