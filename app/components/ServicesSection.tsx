'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
    {
        title: 'Saç Bakımı',
        description: 'Profesyonel saç kesimi, boyama ve bakım hizmetleri',
        icon: '💇‍♀️',
        href: '/hizmetler/sac-bakimi',
        features: ['Saç Kesimi', 'Saç Boyama', 'Keratin Bakım', 'Protein Bakım'],
        image: '/hair.jpg'
    },
    {
        title: 'Cilt Bakımı',
        description: 'Yüz bakımı, maske ve peeling uygulamaları',
        icon: '✨',
        href: '/hizmetler/cilt-bakimi',
        features: ['Hydrafacial', 'Anti-Aging', 'Akne Bakımı', 'Cilt Temizliği'],
        image: '/skin.jpg'
    },
    {
        title: 'Makyaj',
        description: 'Profesyonel makyaj ve özel gün makyajı',
        icon: '💄',
        href: '/hizmetler/makyaj',
        features: ['Gelin Makyajı', 'Özel Gün', 'Kalıcı Makyaj', 'Doğal Makyaj'],
        image: '/makeup.jpg'
    },
    {
        title: 'Tırnak Bakımı',
        description: 'Manikür, pedikür ve protez tırnak uygulamaları',
        icon: '💅',
        href: '/hizmetler/tirnak-bakimi',
        features: ['Manikür', 'Pedikür', 'Protez Tırnak', 'Kalıcı Oje'],
        image: '/nail.jpg'
    },
];

const ServicesSection: React.FC = () => {
    return (
        <div className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif mb-4">
                        <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                            Profesyonel Hizmetlerimiz
                        </span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Size özel bakım ve güzellik hizmetlerimizle kendinizi özel hissedin
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <Link href={service.href}>
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="relative h-48 overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                                            style={{ backgroundImage: `url(${service.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <div className="text-3xl mb-1">{service.icon}</div>
                                            <h3 className="text-xl font-semibold">{service.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                        <div className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center text-sm text-gray-500"
                                                >
                                                    <svg
                                                        className="w-4 h-4 mr-2 text-primary-500"
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
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="mt-6 flex items-center text-primary-500 font-medium"
                                        >
                                            Detaylı Bilgi
                                            <svg
                                                className="w-4 h-4 ml-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </motion.div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection; 