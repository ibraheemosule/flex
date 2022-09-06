import s from "../assets/scss/show-more.module.scss";
import fileIcon from "../assets/images/Group 9.svg";

const ShowMore: React.FC = () => {
  return (
    <button className={s.show_more}>
      <span className={s.avi}>
        <img src={fileIcon} alt="file icon to view more" />
      </span>
      <span className={s.event}>Show 30 more events</span>
    </button>
  );
};

export default ShowMore;
