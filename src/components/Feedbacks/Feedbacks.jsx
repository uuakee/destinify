import React from 'react';
import { motion } from 'framer-motion';

const feedbacks = [
    {
        text: "A Destinify melhorou muito nosso planejamento de roteiros. As sugestões são precisas e o suporte é excelente! Desde que começamos a utilizar a plataforma, conseguimos otimizar nosso tempo e oferecer aos clientes experiências de viagem mais personalizadas. A ferramenta de IA é extremamente eficaz em entender as necessidades dos nossos clientes e propor roteiros que superam suas expectativas.",
        name: "Ana Souza",
        position: "Agente de Viagens"
    },
    {
        text: "Os roteiros personalizados realmente encantaram nossos clientes. Estamos muito satisfeitos com os resultados. Antes da Destinify, era um desafio encontrar opções de viagem que combinassem exatamente com o que nossos clientes desejavam. Agora, com apenas alguns cliques, conseguimos oferecer sugestões que são verdadeiramente sob medida.",
        name: "Carlos Pereira",
        position: "CEO da Viagens XPTO"
    },
    {
        text: "A plataforma é intuitiva e fácil de usar. A inteligência artificial realmente faz a diferença.",
        name: "Maria Clara",
        position: "Gerente de Produto"
    },
    {
        text: "Nunca foi tão fácil oferecer experiências exclusivas aos nossos clientes. Destinify está revolucionando nossa operação.",
        name: "Fernando Lima",
        position: "Fundador da ExploreMais"
    }
];

const Feedbacks = () => {
    return (
        <section className="dark:text-gray-800">
            <div className="container py-12 mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 text-center">O que nossos clientes dizem</h2>
                        <p className="text-base md:text-lg dark:text-gray-600 text-center mb-6">Veja como a Destinify está transformando a experiência de viagem para agências ao redor do mundo.</p>
                    </div>
                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            {feedbacks.map((feedback, index) => (
                                <motion.div
                                    key={index}
                                    className="grid content-center gap-4"
                                    initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                        <p>{feedback.text}</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <div>
                                                <p className="text-lg font-semibold">{feedback.name}</p>
                                                <p className="text-sm dark:text-gray-600">{feedback.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedbacks;
