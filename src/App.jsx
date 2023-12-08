import { Layout } from "./components/Layout/Layout.jsx";
import { RestaurantsPage } from "./pages/Restaurants-page/Restaurants-page.jsx";

import "./styles/styles.scss";
export const App = () => {
  return (
    <Layout>
      <RestaurantsPage />
    </Layout>
  );
};
