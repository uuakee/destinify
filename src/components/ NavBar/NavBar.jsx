import './index.css';
import MobileNav from './MobileNav';

const NavBar = () => {
    return (
        <div className="NavBar flex items-center justify-between p-4">
            <div>
                <h2 className="font-bold text-2xl text-[#00FF94]">Destinify.</h2>
            </div>
            <div className="hidden md:flex gap-3 items-center">
                <span>Inicio</span>
                <span>Sobre nós</span>
                <span>Feedbacks</span>
                <span>Contato</span>
            </div>
            <div className="hidden md:flex gap-3">
                <button className='bg-gradient-to-tr from-[#00FF94] to-[#009D5B] px-4 py-2 rounded-md text-white hover:scale-105'>Fale com um especialista</button>
                <button className='outline outline-1 outline-[#00FF94] px-4 py-2 rounded-md'>Login</button>
            </div>
            {/* MobileNav para telas pequenas */}
            <div className="md:hidden">
                <MobileNav />
            </div>
        </div>
    );
};

export default NavBar;
