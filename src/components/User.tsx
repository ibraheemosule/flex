import s from "../assets/scss/user.module.scss";
import Comment from "./Comment";

const User: React.FC = () => {
  return (
    <section className={s.user}>
      <div className={s.form_group}>
        <input type="checkbox" id="html" />
        <label htmlFor="html"></label>
      </div>
      <div className={s.activity}>
        <div className={s.name}>
          <span className={s.name_initial}>D</span>
          <p>
            Daniel James{" "}
            {
              <>
                <span className={s.text}>has changed Status to </span>
                <span className={s.status}>
                  <span
                    className={s.status}
                    style={{ background: "red" }}
                  ></span>
                  Completed
                </span>
                <span className={s.time}>1 day ago</span>
              </>
            }
          </p>
        </div>

        <Comment />
      </div>
    </section>
  );
};

export default User;
