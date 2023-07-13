import Main from "../layout/Main";
import NavBarMain from "../layout/NavBarMain";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <Provider store={store}>
      <NavBarMain />
      <Main>
        <Outlet />
      </Main>
    </Provider>
  );
}
