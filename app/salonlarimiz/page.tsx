'use client'
import React from 'react';
import { motion } from 'framer-motion';

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
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24">
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/salon.jpg)', backgroundAttachment: 'fixed' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl md:text-5xl font-serif mb-4">
                            Salonlarımız
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Modern ve konforlu salonlarımızda profesyonel hizmet
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Salons List */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-16 md:space-y-24">
                    {locations.map((salon) => (
                        <motion.div
                            key={salon.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                        >
                            {/* Salon Info */}
                            <div className="order-2 lg:order-1 space-y-6">
                                <h2 className="text-2xl sm:text-3xl font-serif mb-6">
                                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                                        {salon.name}
                                    </span>
                                </h2>
                                <div className="space-y-4 text-gray-600 mb-8">
                                    <p className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {salon.address}
                                    </p>
                                    <p className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {salon.phone}
                                    </p>
                                    <p className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {salon.workingHours}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    {salon.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center text-gray-600"
                                        >
                                            <svg
                                                className="w-5 h-5 mr-2 text-primary-500"
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
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.a
                                        href={`https://wa.me/${salon.phone.replace(/\s+/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 transition-colors"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Randevu Al
                                    </motion.a>
                                    <motion.a
                                        href={salon.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center px-6 py-3 bg-secondary-500 text-white font-semibold rounded-full hover:bg-secondary-600 transition-colors"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                        </svg>
                                        Yol Tarifi Al
                                    </motion.a>
                                </div>
                            </div>

                            {/* Gallery */}
                            <div className="order-1 lg:order-2">
                                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-4">
                                    {salon.gallery.map((image, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SalonsPage; 