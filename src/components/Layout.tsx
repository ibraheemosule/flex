import { ILayout } from "../ts-types/componentTypes";
import s from "../assets/scss/layout.module.scss";

const Layout: React.FC<ILayout> = ({ children }) => {
  return <main className={s.container}>{children}</main>;
};

export default Layout;
