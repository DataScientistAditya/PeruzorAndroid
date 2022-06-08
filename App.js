import AppRoute from "./src/components/Navigation/navigator";
import { Provider } from "react-redux";
import { Store } from "./src/components/Redux/Store";

export default function App() {
  return (
    <Provider store={Store}>
        <AppRoute></AppRoute>
    </Provider>
  );
}

