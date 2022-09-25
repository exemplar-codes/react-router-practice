import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active} exact>
              All quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/quotes/new" activeClassName={classes.active}>
              Add a quoute
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
