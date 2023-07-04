import { Provider } from "react-redux";
import CalendarPage from "./components/page/CalendarPage";
import { store } from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <CalendarPage />
      </Provider>
    </>
  );
}

export default App;
