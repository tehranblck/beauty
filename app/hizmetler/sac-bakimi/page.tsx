'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const serviceDetails = {
    title: 'Saç Bakımı',
    description: 'Profesyonel saç kesimi, boyama ve bakım hizmetleri',
    icon: '💇‍♀️',
    mainImage: '/hair.jpg',
    gallery: [
        '/hair.jpg',
        '/hair3.jpg',
        '/hair1.jpg',
        '/hair4.jpg',
    ],
    services: [
        {
            name: 'Saç Kesimi',
            description: 'Yüz şeklinize ve saç tipinize uygun profesyonel kesim',
            price: '₺150\'den başlayan fiyatlarla',
            duration: '45-60 dakika',
        },
        {
            name: 'Saç Boyama',
            description: 'Organik boyalar ile kalıcı ve canlı renkler',
            price: '₺350\'den başlayan fiyatlarla',
            duration: '120-180 dakika',
        },
        {
            name: 'Keratin Bakım',
            description: 'Yıpranmış saçlar için özel bakım uygulaması',
            price: '₺600\'den başlayan fiyatlarla',
            duration: '90-120 dakika',
        },
        {
            name: 'Protein Bakım',
            description: 'Saç tellerini güçlendiren protein tedavisi',
            price: '₺400\'den başlayan fiyatlarla',
            duration: '60-90 dakika',
        },
    ],
    benefits: [
        'Uzman kuaförler tarafından uygulama',
        'Kaliteli ve organik ürün kullanımı',
        'Saç tipinize özel bakım programı',
        'Ücretsiz saç analizi ve danışmanlık',
        'Steril ve konforlu ortam',
    ],
};

const ServiceDetailPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24">
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${serviceDetails.mainImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >
                        <div className="text-6xl mb-4">{serviceDetails.icon}</div>
                        <h1 className="text-4xl md:text-5xl font-serif mb-4">
                            {serviceDetails.title}
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            {serviceDetails.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                {/* Services List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {serviceDetails.services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <span>{service.duration}</span>
                                <span className="text-primary-500 font-semibold">
                                    {service.price}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-secondary-500 text-white rounded-2xl p-8 md:p-12 mb-16"
                >
                    <h2 className="text-2xl md:text-3xl font-serif mb-8 text-center">
                        Neden Bizi Tercih Etmelisiniz?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {serviceDetails.benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3"
                            >
                                <svg
                                    className="w-6 h-6 text-primary-400 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {serviceDetails.gallery.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative aspect-square rounded-xl overflow-hidden group"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                                style={{ backgroundImage: `url(${image})` }}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-serif mb-4">
                            Hemen Randevu Alın
                        </h3>
                        <p className="mb-6">
                            Size özel saç bakım hizmetlerimiz için hemen randevu alın.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="https://wa.me/+905555555555"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                            >
                                <svg
                                    className="w-6 h-6 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp ile Randevu Al
                            </motion.a>
                            <Link href="/hizmetlerimiz">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full hover:bg-white/20 transition-colors duration-300 border border-white/30"
                                >
                                    <svg
                                        className="w-6 h-6 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M11 17l-5-5m0 0l5-5m-5 5h12"
                                        />
                                    </svg>
                                    Diğer Hizmetleri İncele
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServiceDetailPage; 