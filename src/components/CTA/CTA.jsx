import React from 'react';
import './index.css';

const CTA = () => {
    return (
        <div className="cta-background mt-12 p-7 md:p-12">
            <div className="cta-content">
                <h1 className="text-2xl md:text-4xl font-bold text-black mb-4 text-center">
                    Fale conosco
                </h1>
                <p className="text-center xl:p-6 text-gray-400">
                    Teremos um especialista para explorar todas as nossas funcionalidades inovadoras e benefícios exclusivos com você. Aproveite a oportunidade de oferecer experiências únicas aos seus clientes e levar sua agência ao próximo nível.
                </p>
                <div className="my-4 flex justify-center">
                    <div className="w-full md:w-2/3 lg:w-1/2 rounded-lg overflow-hidden">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe 
                                src="https://player.vimeo.com/video/524933864?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '0.5rem' }}
                                title="Vimeo | Video Power"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-white font-bold outline outline-1 outline-[#00FF94] px-4 py-4 rounded-md text-black hover:scale-105">
                        Quero automatizar minha agência
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CTA;
