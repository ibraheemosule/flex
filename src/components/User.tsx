import s from "../assets/scss/user.module.scss";
import Comment from "./Comment";
import { useAppSelector } from "../store/hooks";
import { Object } from "../ts-types";
import { statusColors, formatDate, checkInput } from "../assets/utils";

const User: React.FC = () => {
  const events = useAppSelector(state => state.data.slicedEvents);

  return (
    <>
      {events.map((ev: Object, i: number) => {
        const e = { ...ev };
        const isAuthorSame = e.author !== events[i - 1]?.author;
        e.createdAt = formatDate(e.createdAt).toString();

        return (
          <section
            className={`${s.user} ${isAuthorSame && i !== 0 && s.border}`}
            key={ev.createdAt}
          >
            <div className={`${s.form_group} ${!isAuthorSame && s.hide}`}>
              <input
                onClick={e => checkInput(e)}
                type="checkbox"
                id={ev.createdAt}
              />
              <label htmlFor={ev.createdAt}></label>
            </div>

            <div className={s.activity}>
              <div className={s.name}>
                <span className={s.name_initial}>{e.author[0]}</span>
                <p>
                  {e.author}{" "}
                  {e.type === "activity" ? (
                    <>
                      <span className={s.text}>has changed Status to </span>
                      <span className={s.status}>
                        <span
                          style={{
                            background:
                              e.activity?.status !== undefined
                                ? statusColors[e.activity.status]
                                : "#F28282",
                          }}
                        ></span>
                        {e.activity?.status}
                      </span>
                      <span className={s.time}>
                        {Number(e.createdAt) > 1
                          ? `${e.createdAt} days`
                          : `${e.createdAt} day`}{" "}
                        ago
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                </p>
              </div>

              {e.type === "comment" ? <Comment obj={e} /> : ""}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default User;
