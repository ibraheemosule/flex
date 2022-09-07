import s from "../assets/scss/comment.module.scss";
import avi from "../assets/images/Group 3.svg";
import { ICommentProps } from "../ts-types/componentTypes";

const Comment: React.FC<ICommentProps> = ({ obj }) => {
  return (
    <div className={s.comment}>
      <p className={s.title}>{obj.message?.title}</p>

      <div className={s.info}>
        <span className={s.avi}>
          <img src={avi} alt="user avi" />
        </span>
        <span className={s.name}>{obj.author}</span>
        <span className={s.time}>
          {" "}
          {Number(obj.createdAt) > 1
            ? `${obj.createdAt} days`
            : `${obj.createdAt} day`}{" "}
          ago
        </span>
      </div>
      <div className={s.text}>{obj.message?.description}</div>
    </div>
  );
};

export default Comment;
