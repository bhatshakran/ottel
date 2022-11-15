import { Link } from 'react-router-dom';
import Container from './Container';

const Header = ({ id }: any) => {
  return (
    <>
      <Container>
        <div className='flex justify-between px-4 xl:px-0 py-2 border-b border-black font-regis'>
          <div className='text-lg'>
            <Link to='/'>Ottelo</Link>
          </div>
          <div className='text-lg cursor-pointer'>
            <ul className='flex items-center w-full  justify-center text-lg font-regis gap-x-3'>
              <li className='hover:text-secondary'>
                <Link to='/hotels'>Hotels</Link>
              </li>
              <li className='hover:text-secondary'>
                {id ? (
                  <Link to='/account'>Account</Link>
                ) : (
                  <Link to='/auth/login'>Signup</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
