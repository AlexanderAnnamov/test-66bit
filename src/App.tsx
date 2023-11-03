import { Routes, Route} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import ThemeProvider from "./providers/theme-provider";
import Newsline from "./pages/news-line";
import Theme from "./pages/theme";
import MainLayout from "./layouts";

import "./styles/app.css";

function App() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<MainLayout/>}>
              <Route index element={<Newsline />} />
              <Route path="/themes" element={<Theme />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
