'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: 'Ayşe Yılmaz',
        role: 'Müşteri',
        comment: 'Harika bir deneyimdi! Personel çok ilgili ve profesyonel. Kesinlikle tekrar geleceğim.',
        image: '/test1.jpg',
    },
    {
        name: 'Zeynep Kaya',
        role: 'Müşteri',
        comment: 'Saç bakımı konusunda muhteşem sonuçlar aldım. Çok memnun kaldım.',
        image: '/test2.jpg',
    },
    {
        name: 'Elif Demir',
        role: 'Müşteri',
        comment: 'Modern ve ferah bir salon. Hizmet kalitesi gerçekten üst düzey.',
        image: '/test3.jpg',
    },
];

const TestimonialsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="py-16">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
                Müşterilerimizin Yorumları
            </h2>
            <div className="relative max-w-4xl mx-auto px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-lg shadow-xl p-8 md:p-12"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <p className="text-lg md:text-xl italic mb-4">
                                    "{testimonials[currentIndex].comment}"
                                </p>
                                <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <button
                    onClick={prevTestimonial}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors"
                >
                    ←
                </button>
                <button
                    onClick={nextTestimonial}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors"
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default TestimonialsCarousel; 