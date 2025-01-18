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
        image: '/hair.jpg',
        details: 'Uzman kuaförlerimiz ile saçlarınıza özel bakım ve şekillendirme hizmetleri sunuyoruz.',
        price: 'Başlangıç fiyatı: ₺150'
    },
    {
        title: 'Cilt Bakımı',
        description: 'Yüz bakımı, maske ve peeling uygulamaları',
        icon: '✨',
        href: '/hizmetler/cilt-bakimi',
        features: ['Hydrafacial', 'Anti-Aging', 'Akne Bakımı', 'Cilt Temizliği'],
        image: '/skin.jpg',
        details: 'Cildinize özel bakım programları ile genç ve parlak bir görünüm elde edin.',
        price: 'Başlangıç fiyatı: ₺300'
    },
    {
        title: 'Makyaj',
        description: 'Profesyonel makyaj ve özel gün makyajı',
        icon: '💄',
        href: '/hizmetler/makyaj',
        features: ['Gelin Makyajı', 'Özel Gün', 'Kalıcı Makyaj', 'Doğal Makyaj'],
        image: '/makeup.jpg',
        details: 'Özel günlerinizde ve her gün için profesyonel makyaj hizmetleri.',
        price: 'Başlangıç fiyatı: ₺200'
    },
    {
        title: 'Tırnak Bakımı',
        description: 'Manikür, pedikür ve protez tırnak uygulamaları',
        icon: '💅',
        href: '/hizmetler/tirnak-bakimi',
        features: ['Manikür', 'Pedikür', 'Protez Tırnak', 'Kalıcı Oje'],
        image: '/nail.jpg',
        details: 'El ve ayak bakımı ile tırnaklarınıza profesyonel dokunuş.',
        price: 'Başlangıç fiyatı: ₺100'
    },
];

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-serif mb-6">
                        <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                            Güzellik Hizmetlerimiz
                        </span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Size özel tasarlanmış profesyonel güzellik ve bakım hizmetlerimizle
                        tanışın. Her hizmetimiz, uzman ekibimiz tarafından özenle sunulmaktadır.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <Link href={service.href}>
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="relative h-64 overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                                            style={{ backgroundImage: `url(${service.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <div className="text-4xl mb-2">{service.icon}</div>
                                            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                                            <p className="text-gray-200">{service.description}</p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-600 mb-4">{service.details}</p>
                                        <div className="space-y-3">
                                            {service.features.map((feature, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center text-sm text-gray-500"
                                                >
                                                    <svg
                                                        className="w-5 h-5 mr-3 text-primary-500"
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
                                        <div className="mt-6 flex items-center justify-between">
                                            <span className="text-primary-500 font-semibold">
                                                {service.price}
                                            </span>
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                className="flex items-center text-secondary-500 font-medium"
                                            >
                                                Detaylı Bilgi
                                                <svg
                                                    className="w-5 h-5 ml-2"
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
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-serif mb-4">
                            Hemen Randevu Alın
                        </h3>
                        <p className="mb-6 max-w-2xl mx-auto">
                            Profesyonel ekibimiz ile size özel bakım deneyimi için hemen randevu alın.
                        </p>
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
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage; 