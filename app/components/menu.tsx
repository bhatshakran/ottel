import { Link } from '@remix-run/react';
import CloseIcon from '@mui/icons-material/Close';
import type { Props } from './Header';

const Menu = ({ showMenu }: Props) => {
  const closeMenu = () => {
    showMenu();
  };
  return (
    <div className='menu absolute top-0 left-0 w-full h-full bg-white z-20 overflow-hidden'>
      <div className='close'>
        <button onClick={closeMenu}>
          <CloseIcon fontSize='large' />
        </button>
      </div>
      <ul className='flex flex-col items-center w-full h-screen justify-center text-3xl sm:text-4xl md:text-8xl font-regis gap-y-12'>
        <li className='hover:text-secondary'>
          <Link to='/'>Home</Link>
        </li>
        <li className='hover:text-secondary'>
          <Link to='/hotels'>Hotels</Link>
        </li>
        <li className='hover:text-secondary'>
          <Link to='/auth/login'>Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
