import { Provider } from "react-redux";
import { store } from "./store/store";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        {/* <Sidebar /> */}
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
