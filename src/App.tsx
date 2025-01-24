import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TradeLogsPage from "./pages/TradeLogs";
import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";

function App() {
  return (
    <main className="min-h-screen w-full font-work text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trade-logs" element={<TradeLogsPage />} />
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
        className={"px-3 pb-3"}
        transition={Bounce}
      />
    </main>
  );
}

export default App;
