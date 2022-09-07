import s from "../assets/scss/show-more.module.scss";
import fileIcon from "../assets/images/Group 9.svg";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { slicedArray } from "../store/reducers/dataReducer";

const ShowMore: React.FC = () => {
  const events = useAppSelector(state => state.data.slicedEvents);
  const allEvents = useAppSelector(state => state.data.events);
  const dispatch = useAppDispatch();

  const addToEvent = () => {
    if (events.length >= allEvents.length) return;
    dispatch(slicedArray(events.length));
  };

  return (
    <button onClick={addToEvent} className={s.show_more}>
      <span className={s.avi}>
        <img src={fileIcon} alt="file icon to view more" />
      </span>
      <span className={s.event}>Show 30 more events</span>
    </button>
  );
};

export default ShowMore;
