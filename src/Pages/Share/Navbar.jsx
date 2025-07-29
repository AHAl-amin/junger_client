import { Link, useLocation } from 'react-router-dom';
import logo from '../../../public/image/logo.png';

const Navbar = () => {
 

  return (
    <div className=" px-30 pt-6 fixed mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-14 w-auto" /> 
        </div>

        
      </div>
  );
};

export default Navbar;
