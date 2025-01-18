'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Animasyon varyantları
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
};

const locations = [
    {
        name: 'Kadıköy Şubesi',
        address: 'Caferağa Mah. Moda Cad. No: 123, Kadıköy/İstanbul',
        phone: '+90 555 111 2233',
        workingHours: 'Her gün 09:00 - 21:00',
        mainImage: '/salon1.jpg',
        gallery: ['/kad1.jpg', '/kad2.jpg', '/kad3.jpg', '/kad4.jpg'],
        features: [
            'Modern ve Ferah Salon',
            'Profesyonel Ekipmanlar',
            'VIP Hizmet',
            'Ücretsiz Otopark',
            'Çocuk Oyun Alanı',
            'Kafeterya'
        ],
        mapUrl: 'https://maps.google.com/?q=kadiköy+istanbul'
    },
    {
        name: 'Şişli Şubesi',
        address: 'Meşrutiyet Mah. Halaskargazi Cad. No: 456, Şişli/İstanbul',
        phone: '+90 555 444 5566',
        workingHours: 'Her gün 09:00 - 21:00',
        mainImage: '/salon2.jpg',
        gallery: ['/sis1.jpg', '/sis2.jpg', '/sis3.jpg', '/sis4.jpg'],
        features: [
            'Lüks Tasarım',
            'Son Teknoloji Ekipmanlar',
            'VIP Hizmet',
            'Vale Parking',
            'Bekleme Salonu',
            'Kafeterya'
        ],
        mapUrl: 'https://maps.google.com/?q=şişli+istanbul'
    }
];

const SalonsPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20 sm:pt-24">
            {/* Hero Section */}
            <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
                <Image
                    src="/salon.jpg"
                    alt="Salonlarımız"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        {...fadeInUp}
                        className="text-center px-4 sm:px-6"
                    >
                        <h1 className="text-3xl text-white sm:text-4xl md:text-5xl font-serif mb-4">
                            Salonlarımız
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                            Modern ve konforlu salonlarımızda profesyonel hizmet
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Salons List */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="space-y-12 sm:space-y-16 md:space-y-24">
                    {locations.map((salon, index) => (
                        <motion.div
                            key={salon.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center"
                        >
                            {/* Salon Info */}
                            <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
                                <h2 className="text-2xl sm:text-3xl font-serif">
                                    <span className="gradient-text">
                                        {salon.name}
                                    </span>
                                </h2>
                                <div className="space-y-3 sm:space-y-4 text-gray-600">
                                    <p className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {salon.address}
                                    </p>
                                    <p className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {salon.phone}
                                    </p>
                                    <p className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {salon.workingHours}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    {salon.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center text-gray-600 text-sm sm:text-base"
                                        >
                                            <svg
                                                className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary-500 flex-shrink-0"
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

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <motion.a
                                        href={`https://wa.me/${salon.phone.replace(/\s+/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 transition-colors text-sm sm:text-base hover-glow"
                                    >
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                        </svg>
                                        Randevu Al
                                    </motion.a>
                                    <motion.a
                                        href={salon.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center justify-center px-6 py-3 bg-secondary-500 text-white font-semibold rounded-full hover:bg-secondary-600 transition-colors text-sm sm:text-base hover-glow"
                                    >
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                        </svg>
                                        Yol Tarifi Al
                                    </motion.a>
                                </div>
                            </div>

                            {/* Gallery */}
                            <div className="order-1 lg:order-2">
                                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                                    {salon.gallery.map((image, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="relative aspect-square rounded-xl overflow-hidden hover-lift"
                                        >
                                            <Image
                                                src={image}
                                                alt={`${salon.name} - Görsel ${idx + 1}`}
                                                fill
                                                quality={100}
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                                className="object-cover hover-opacity"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SalonsPage; 