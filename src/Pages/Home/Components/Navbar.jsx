import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlink = (
    <>
      <li>
        <NavLink to="https://www.linkedin.com/in/muhammad-seyam-782964201/" target="_blank" className='text-[#A6ADBB] font-medium hover:text-green-300 duration-500'>Linkedin</NavLink>
      </li>
      <li>
        <NavLink to="https://github.com/seyam14" target="_blank" className='text-[#A6ADBB] font-medium hover:text-green-300 duration-500'>GitHub</NavLink>
      </li>
      <li>
        <NavLink to="https://wa.me/qr/N44O42RP3UDUO1" target="_blank" className='text-[#A6ADBB] font-medium hover:text-green-300 duration-500'>WhatsApp</NavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-screen-2xl mx-auto hidden lg:block cursor-crosshair">
      <div className="navbar">
        <div className="navbar-start">
          <a className="text-4xl text-[#A6ADBB] font-bold">Seyam</a>
        </div>
        <div className="navbar-end hidden lg:flex list-none space-x-20">
          {navlink}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
