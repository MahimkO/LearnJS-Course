import { Provider } from "react-redux";

import { Layout } from "./components/Layout/Layout.jsx";
import { RestaurantsPage } from "./pages/Restaurants-page/Restaurants-page.jsx";

import { store } from "./redux/index.js";

import "./styles/styles.scss";

export const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <RestaurantsPage />
      </Layout>
    </Provider>
  );
};
