import s from "../assets/scss/show-more.module.scss";
import fileIcon from "../assets/images/Group 9.svg";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { slicedArray } from "../store/reducers/dataReducer";
import { useState } from "react";

const ShowMore: React.FC = () => {
  const [noEvents, setNoEvents] = useState<boolean>(false);
  const events = useAppSelector(state => state.data.slicedEvents);
  const allEvents = useAppSelector(state => state.data.events);
  const dispatch = useAppDispatch();

  const addToEvent = () => {
    if (events.length >= allEvents.length) {
      setNoEvents(true);
      setTimeout(() => setNoEvents(false), 3000);
      return;
    }
    dispatch(slicedArray(events.length));
  };

  return (
    <section className={s.show_more}>
      {noEvents ? <p>No More Events</p> : ""}
      <button onClick={addToEvent}>
        <span className={s.avi}>
          <img src={fileIcon} alt="file icon to view more" />
        </span>
        <span className={s.event}>Show more events</span>
      </button>
    </section>
  );
};

export default ShowMore;
