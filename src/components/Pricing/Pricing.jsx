import React, { useState } from 'react';
import { motion } from 'framer-motion';

const pricingCards = [
    {
        title: 'Experimente',
        price: 0,
        features: [
            'Chatbot padrão Destinify',
            '1000 Mensagens durante 7 dias',
            'Não há treinamento do chatbot',
            'Não há treinamento de precificação',
            'Integração com Whatsapp e Website'
        ],
        buttonText: 'Experimentar Agora',
    },
    {
        title: 'Standard',
        price: 99,
        features: [
            'Chatbot personalizado',
            '2000 Mensagens por mês',
            '2 Milhões de Caracteres para treinar o chatbot',
            'Treinamento de precificação',
            'Integração com Whatsapp e Website'
        ],
        buttonText: 'Experimentar Agora',
    },
    {
        title: 'Plus',
        price: 199,
        features: [
            'Chatbot personalizado',
            '5000 Mensagens por mês',
            '5 Milhões de Caracteres para treinar o chatbot',
            'Treinamento de precificação e resgate de carrinho',
            'Integração com Whatsapp, Website e CRMs'
        ],
        buttonText: 'Entre em contato',
    },
];

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('Mensal');

    const calculatePrice = (price) => {
        if (billingCycle === 'Anual') {
            const annualPrice = price * 12 * 0.8; // Aplica 20% de desconto
            const monthlyEquivalent = annualPrice / 12;
            return { annualPrice: annualPrice.toFixed(2), monthlyEquivalent: monthlyEquivalent.toFixed(2) };
        }
        return { monthlyEquivalent: price.toFixed(2) };
    }

    return (
        <section className="flex flex-col items-center">
            <h1 className="text-2xl md:text-4xl font-bold text-black mb-4 text-center">
                Conheça nossos planos
            </h1>
            <p className="text-base md:text-lg text-gray-400 text-center mb-6">
                Escolha o plano que se adequa à sua necessidade
            </p>
            <div className="flex space-x-4 mb-6">
                <button
                    className={`px-4 py-2 rounded-md font-semibold ${billingCycle === 'Mensal' ? 'bg-[#00FF94] text-black' : 'bg-gray-800 text-gray-400'}`}
                    onClick={() => setBillingCycle('Mensal')}
                >
                    Mensal
                </button>
                <button
                    className={`px-4 py-2 rounded-md font-semibold ${billingCycle === 'Anual' ? 'bg-[#00FF94] text-black' : 'bg-gray-800 text-gray-400'}`}
                    onClick={() => setBillingCycle('Anual')}
                >
                    Anual 20% de Desconto
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
                {pricingCards.map((card, index) => {
                    const priceInfo = calculatePrice(card.price);
                    const isStartup = card.title === 'Plus';

                    return (
                        <motion.div
                            key={index}
                            className={`rounded-lg p-1 ${isStartup ? 'bg-gradient-to-r from-[#00FF94] to-[#00C8A1]' : ''}`}
                            initial={{ opacity: 0, y: 50 }} // Inicialmente, os cards estão opacos e deslocados para baixo
                            whileInView={{ opacity: 1, y: 0 }} // Quando entram na view, eles se tornam visíveis e sobem
                            viewport={{ once: true }} // A animação ocorre apenas uma vez ao entrar na view
                            transition={{ duration: 0.6, delay: index * 0.2 }} // Atraso em sequência para cada card
                        >
                            <div className="p-6 bg-white text-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                                {billingCycle === 'Anual' ? (
                                    <>
                                        <p className="text-2xl font-bold mb-1">R$ {priceInfo.annualPrice} /ano</p>
                                        <p className="text-sm text-gray-500 mb-4">(R$ {priceInfo.monthlyEquivalent} /mês)</p>
                                    </>
                                ) : (
                                    <p className="text-2xl font-bold mb-4">R$ {priceInfo.monthlyEquivalent} /mês</p>
                                )}
                                <ul className="mb-6">
                                    {card.features.map((feature, index) => (
                                        <li key={index} className="text-gray-400 mb-2">{feature}</li>
                                    ))}
                                </ul>
                                <button
                                    className="w-full bg-[#00FF94] text-black py-2 rounded-md font-semibold hover:bg-[#009D5B] transition-colors duration-300"
                                    onClick={() => alert('Em breve!')}
                                >
                                    {card.buttonText}
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default Pricing;
