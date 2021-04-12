import { NavLink } from 'react-router-dom';
import Menu from './Menu/Menu';
import s from './Navbar.module.css';

const Navbar = () => {
   return (
      <nav className={s.nav}>
         <Menu />
         <div className={s.friends}>
            <div className={s.title}>Friends</div>
            <div className={s.items}>
               <div className={s.item}>a</div>
               <div className={s.item}>a</div>
               <div className={s.item}>a</div>
            </div>
         </div>
      </nav>
   )
}

export default Navbar;