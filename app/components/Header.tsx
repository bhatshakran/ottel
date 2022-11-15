import { Link } from 'react-router-dom';
import Container from './Container';

export interface Props {
  showMenu: () => void;
}

const Header = ({ showMenu }: Props) => {
  const displayMenu = () => {
    showMenu();
  };
  return (
    <>
      <Container>
        <div className='flex justify-between px-4 xl:px-0 py-2 border-b border-black font-regis'>
          <div className='text-lg'>
            <Link to='/'>Ottelo</Link>
          </div>
          <div className='text-lg cursor-pointer' onClick={displayMenu}>
            menu
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
