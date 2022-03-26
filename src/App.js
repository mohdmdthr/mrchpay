import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Stack } from "@mui/material";

import Home from "./pages/Home/Home";
import ManageCards from "./pages/manageCards/ManageCards";
import ManageCode from "./services/manageCode/ManageCode";
import AddCard from "./services/addCard/AddCard";
import CreateCard from "./services/createCard/CreateCard";
import MyWallet from "./pages/myWallet/MyWallet";
import MyCode from "./services/myCode/MyCode";
import WalletExchange from "./services/walletExchange/WalletExchange";
import EnterWalletID from "./services/enterWalletID/EnterWalletID";
import ExchangeConfirm from "./services/exchangeConfirm/ExchangeConfirm";
import Deposit from "./pages/deposit/Deposit";
import TraditionalDeposit from "./services/traditionalDeposit/TraditionalDeposit";
import CardDeposit from "./services/cardDeposit/CardDeposit";
import Withdraw from "./services/withdraw/Withdraw";
import RequestInvoice from "./services/requestInvoice/RequestInvoice";
import RequestInvoiceConfirm from "./services/requestInvoiceConfirm/RequestInvoiceConfirm";
import Transactions from "./pages/transactions/Transactions";
import Notifications from "./pages/notifications/Notifications";
import Bills from "./services/bills/Bills";
import Telecom from "./services/bills/telecom/Telecom";

import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#189c8a",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Container>
            <Stack
              padding="2rem 0"
              maxWidth="400px"
              mx="auto"
              justifyContent="center"
            >
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="manage-cards">
                    <Route index element={<ManageCards />} />
                    <Route path="manage-code" element={<ManageCode />} />
                    <Route path="add" element={<AddCard />} />
                    <Route path="create" element={<CreateCard />} />
                  </Route>
                  <Route path="my-wallet">
                    <Route index element={<MyWallet />} />
                    <Route path="my-code" element={<MyCode />} />
                    <Route path="exchange">
                      <Route index element={<WalletExchange />} />
                      <Route path="enter-id" element={<EnterWalletID />} />
                      <Route path="confirm" element={<ExchangeConfirm />} />
                    </Route>
                    <Route path="deposit">
                      <Route index element={<Deposit />} />
                      <Route
                        path="traditional"
                        element={<TraditionalDeposit />}
                      />
                      <Route path="card" element={<CardDeposit />} />
                    </Route>
                    <Route path="withdraw" element={<Withdraw />} />
                    <Route path="request-invoice">
                      <Route index element={<RequestInvoice />} />
                      <Route
                        path="confirm"
                        element={<RequestInvoiceConfirm />}
                      />
                    </Route>
                  </Route>
                  <Route path="transactions" element={<Transactions />} />
                  <Route path="notifications" element={<Notifications />} />
                  <Route path="services">
                    <Route path="bills">
                      <Route index element={<Bills />} />
                      <Route path="telecom">
                        <Route index element={<Telecom />} />
                      </Route>
                    </Route>
                  </Route>
                </Route>
              </Routes>
            </Stack>
          </Container>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
