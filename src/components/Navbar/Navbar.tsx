import { Link } from 'react-router-dom';
import Button from '../Button';

interface Props {
  handleOpen: () => void;
}

const Navbar = ({ handleOpen }: Props) => {
  return (
    <nav className="container-wrap flex justify-between py-6">
      <Logo />
      <Button aria-label="Add item" onClick={handleOpen}>
        <Icon />
      </Button>
    </nav>
  );
};

export default Navbar;

const Logo = () => {
  return (
    <Link to="/carts" className="text-4xl text-primary">
      Logo
    </Link>
  );
};

const Icon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 7H9V1C9 0.447 8.552 0 8 0C7.448 0 7 0.447 7 1V7H1C0.448 7 0 7.447 0 8C0 8.553 0.448 9 1 9H7V15C7 15.553 7.448 16 8 16C8.552 16 9 15.553 9 15V9H15C15.552 9 16 8.553 16 8C16 7.447 15.552 7 15 7Z"
      fill="white"
    />
  </svg>
);
