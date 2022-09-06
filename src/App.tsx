import Layout from "./components/Layout";
import User from "./components/User";
import ShowMore from "./components/ShowMore";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { sortEvents } from "./store/reducers/dataReducer";

function App() {
  const dispatch = useAppDispatch();
  const events = useAppSelector(state => state.data.events);
  dispatch(sortEvents());

  return (
    <Layout>
      <>
        <User />
        <ShowMore />
      </>
    </Layout>
  );
}

export default App;
