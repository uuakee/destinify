import React from 'react';
import { CableCar, Globe, Star } from 'lucide-react'; // Importe os ícones que deseja usar

const features = [
    {
        icon: <CableCar className="text-white" />,
        title: "Roteiros personalizados",
        description: "Ofereça aos seus clientes viagens sob medida, com recomendações que se ajustam exatamente às suas preferências e interesses."
    },
    {
        icon: <Globe className="text-white" />,
        title: "Eficiência aprimorada",
        description: "Reduza o tempo gasto planejando roteiros, permitindo que a IA faça o trabalho pesado e ofereça sugestões precisas e rápidas."
    },
    {
        icon: <Star className="text-white" />,
        title: "Insights baseados em dados",
        description: "Utilize dados e tendências atualizadas para oferecer aos seus clientes roteiros que estejam alinhados com as últimas novidades e preferências do mercado."
    }
];

const About = () => {
    return (
        <section className="flex flex-col p-6 md:p-12">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 text-center">
                O que é a Destinify?
            </h2>
            <p className="text-base md:text-lg dark:text-gray-600 text-center mb-12">
                Usamos inteligência artificial para criar roteiros de viagem personalizados com base nas preferências e históricos dos clientes. Nossa tecnologia analisa dados para oferecer recomendações precisas e únicas, garantindo que cada viagem seja adaptada às necessidades individuais de cada usuário.
            </p>
            <div className="flex flex-col md:flex-row gap-6 mt-4 mb-12">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-start md:items-start w-full md:w-1/3">
                        <div className="flex items-left justify-center mb-4">
                            <div className="w-12 h-12 bg-[#00FF94] rounded-full flex items-center justify-center">
                                {feature.icon}
                            </div>
                        </div>
                        <div className="text-left md:text-left">
                            <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                            <p className="text-base text-black">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
