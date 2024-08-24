import React from 'react';
import { Instagram } from 'lucide-react'; // Certifique-se de que o lucide-react está instalado

const Footer = () => {
    return (
        <footer className="bg-[#1E1E1E] text-white p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <h2 className="font-bold text-2xl text-[#00FF94] mb-2 md:mb-0">Destinify.</h2>
                {/* <p className="mt-2 md:mt-0">contato@destinify.com.br</p> */}
                <div className="mt-4 md:mt-0">
                    <Instagram 
                        size={24} 
                    />
                    <svg width="0" height="0">
                        <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00FF94" />
                            <stop offset="100%" stopColor="#00C8A1" />
                        </linearGradient>
                    </svg>
                </div>
            </div>
            <p className="text-center mt-4 text-gray-400">© 2023 Destinify. Todos os direitos reservados.</p>
        </footer>
    );
}

export default Footer;
