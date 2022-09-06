interface CommentProps {}
import s from "../assets/scss/comment.module.scss";
import avi from "../assets/images/Group 3.svg";

const Comment: React.FC = () => {
  return (
    <div className={s.comment}>
      <p>Welcome to mars</p>

      <div className={s.info}>
        <span className={s.avi}>
          <img src={avi} alt="user avi" />
        </span>
        <span className={s.name}>Arya Stark</span>
        <span className={s.time}>1 day ago</span>
      </div>
      <div className={s.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie
        sem ut purus ornare, vel laoreet augue vestibulum. Ut cursus ex lacinia
        dui blandit, at molestie elit luctus.
      </div>
    </div>
  );
};

export default Comment;
