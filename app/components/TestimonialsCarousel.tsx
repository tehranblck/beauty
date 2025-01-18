'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        name: 'Ayşe Yılmaz',
        role: 'Düzenli Müşteri',
        image: '/test1.jpg',
        comment: 'Profesyonel ekip ve kaliteli hizmet. Her ziyaretimde memnun ayrılıyorum.',
        rating: 5
    },
    {
        id: 2,
        name: 'Zeynep Kaya',
        role: 'İş İnsanı',
        image: '/test2.jpg',
        comment: 'Yoğun iş tempomda kendimi şımartmak için en iyi adres. Özellikle cilt bakımları harika.',
        rating: 5
    },
    {
        id: 3,
        name: 'Elif Demir',
        role: 'Influencer',
        image: '/test3.jpg',
        comment: 'Modern teknikler ve trend uygulamalar için tercih ettiğim salon. Çok memnunum.',
        rating: 5
    }
]

const TestimonialsCarousel = () => {
    return (
        <div className="py-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-serif mb-4">
                    Mutlu
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                        {' '}Müşterilerimiz
                    </span>
                </h2>
                <p className="text-gray-600">
                    Müşterilerimizin deneyimleri ve yorumları
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gray-50 p-6 rounded-2xl"
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-semibold">{testimonial.name}</h4>
                                <p className="text-sm text-gray-600">{testimonial.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                        <div className="flex text-primary-500">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default TestimonialsCarousel 