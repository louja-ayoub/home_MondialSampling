import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import Localization from './locale/Localization';
import { AppContextProvider } from './appContext';



function App() {
  return (
    <Localization>
      <AppContextProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<Home />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </AppContextProvider>
    </Localization>
  );
}

export default App;
