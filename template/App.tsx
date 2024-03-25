import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import React from "react";
import Router from "./src/navigations/Router";
import { AppContextProvider } from "contexts";
import { store } from "./src/redux/Store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppContextProvider>
          <Router />
        </AppContextProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
