import { useState } from 'react';
import { Menu } from 'lucide-react'; // Importar o ícone de Menu

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Ícone do menu */}
            <button 
                onClick={toggleMenu} 
                className="text-black p-2 focus:outline-none"
            >
                <Menu size={24} />
            </button>
            
            {/* Menu */}
            {isOpen && (
                <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md p-4 flex flex-col gap-3">
                    <span>Inicio</span>
                    <span>Sobre nós</span>
                    <span>Feedbacks</span>
                    <span>Contato</span>
                    <button className='bg-gradient-to-tr from-[#00FF94] to-[#009D5B] px-4 py-2 rounded-md text-white hover:scale-105'>
                        Fale com um especialista
                    </button>
                    <button className='outline outline-1 outline-[#00FF94] px-4 py-2 rounded-md'>
                        Login
                    </button>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
