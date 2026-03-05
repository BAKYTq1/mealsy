import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"; // Импортируем провайдер
import { router } from './providers'
import "./App.css";
import { store } from '../store/store'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;