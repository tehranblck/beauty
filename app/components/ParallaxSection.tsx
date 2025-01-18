'use client'
import React from 'react';
import { motion } from 'framer-motion';

const ParallaxSection: React.FC = () => {
    return (
        <div className="relative h-[60vh] bg-fixed bg-cover bg-center bg-[url('/team.jpg')] overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-white">
                        Profesyonel Ekip,<br />
                        <span className="text-primary">Kusursuz Hizmet</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white max-w-2xl">
                        Deneyimli ekibimiz ve modern ekipmanlarımızla size en iyi hizmeti sunuyoruz
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-black hover:border-white hover:border-2 hover:text-primary transition-colors"
                    >
                        Randevu Al
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default ParallaxSection; 