import React from 'react';
import './index.css'
import heroImage from '../../assets/hero.png'; // Ajuste o caminho conforme necessário

const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 text-black fade-in">
            {/* Conteúdo da Coluna Esquerda */}
            <div className="md:w-1/2 flex flex-col items-start mb-6 md:mb-0">
                <div className='flex flex-col'>
                    <h1 className="text-3xl md:text-5xl font-normal mb-2">
                        Encontre os roteiros de viagem com
                    </h1>
                    <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#009D5B]">
                        Inteligência Artificial
                    </h1>
                </div>
                <p className="text-lg md:text-xl mt-4">
                    Ofereça roteiros personalizados e surpreendentes que encantarão seus clientes e transformarão sua agência em um líder de mercado.
                </p>
                <button className='shadow-custom-button bg-gradient-to-tr from-[#00FF94] to-[#009D5B] font-bold px-4 py-2 rounded-md text-white mt-4'>
                    Junte-se a nós
                </button>
            </div>
            {/* Conteúdo da Coluna Direita */}
            <div className="md:w-1/2 flex justify-center items-center">
                <img 
                    src={heroImage} 
                    alt="Hero Illustration" 
                    className="w-full max-w-md md:max-w-lg"  // Ajusta o tamanho da imagem no web
                />
            </div>
        </section>
    );
};

export default HeroSection;
