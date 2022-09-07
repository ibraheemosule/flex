import Layout from "./components/Layout";
import User from "./components/User";
import ShowMore from "./components/ShowMore";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { sortEvents, slicedArray } from "./store/reducers/dataReducer";

function App() {
  const events = useAppSelector(state => state.data.slicedEvents);
  const dispatch = useAppDispatch();

  dispatch(sortEvents());
  if (!events.length) dispatch(slicedArray(0));

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
