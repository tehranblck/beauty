'use client'
import React from 'react';
import { motion } from 'framer-motion';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ParallaxSection from '../components/ParallaxSection';

const teamMembers = [
    {
        name: 'Selin Yıldız',
        role: 'Kurucu & Baş Stilist',
        image: '/member1.jpg',
        description: '15 yıllık deneyim ile güzellik sektöründe uzman.',
    },
    {
        name: 'Deniz Kaya',
        role: 'Saç Tasarım Uzmanı',
        image: '/member2.jpg',
        description: 'Uluslararası sertifikalı saç tasarım uzmanı.',
    },
    {
        name: 'Merve Demir',
        role: 'Makyaj Artisti',
        image: '/member3.jpg',
        description: 'Profesyonel makyaj ve güzellik uzmanı.',
    },
    {
        name: 'Ayşe Yılmaz',
        role: 'Cilt Bakım Uzmanı',
        image: '/member4.jpg',
        description: 'Medikal estetik ve cilt bakımı konusunda uzman.',
    },
];

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24">
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/about.jpg)', backgroundAttachment: 'fixed' }}
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
                            Hakkımızda
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            2008'den beri güzellik ve bakım sektöründe profesyonel hizmet veriyoruz
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Story Section */}
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">
                        <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                            Hikayemiz
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        2008 yılında küçük bir salonla başlayan hikayemiz, bugün modern ekipmanlar
                        ve uzman kadromuzla birlikte büyüyerek devam ediyor. Müşterilerimize en iyi
                        hizmeti sunmak için sürekli kendimizi geliştiriyor, en son trendleri ve
                        teknolojileri takip ediyoruz.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">15+</h3>
                            <p className="text-gray-600">Yıllık Deneyim</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">10.000+</h3>
                            <p className="text-gray-600">Mutlu Müşteri</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">20+</h3>
                            <p className="text-gray-600">Uzman Personel</p>
                        </div>
                    </div>
                </motion.div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 rounded-xl shadow-lg"
                    >
                        <h3 className="text-2xl font-serif mb-4">Misyonumuz</h3>
                        <p className="text-gray-600">
                            Müşterilerimize en kaliteli hizmeti sunarak, onların kendilerini
                            özel ve güzel hissetmelerini sağlamak. Modern teknikler ve
                            profesyonel ürünlerle müşteri memnuniyetini en üst düzeyde tutmak.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 rounded-xl shadow-lg"
                    >
                        <h3 className="text-2xl font-serif mb-4">Vizyonumuz</h3>
                        <p className="text-gray-600">
                            Güzellik sektöründe öncü ve yenilikçi yaklaşımlarla, müşterilerimize
                            en iyi deneyimi yaşatmak. Sürekli gelişen ve büyüyen bir marka
                            olarak sektörde lider konumda olmak.
                        </p>
                    </motion.div>
                </div>

                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
                        <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                            Profesyonel Ekibimiz
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg group"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                                        style={{ backgroundImage: `url(${member.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-xl font-semibold">{member.name}</h3>
                                        <p className="text-gray-300">{member.role}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600">{member.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Parallax Section */}
                <ParallaxSection />

                {/* Testimonials */}
                <TestimonialsCarousel />

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-serif mb-4">
                            Siz de Ailemize Katılın
                        </h3>
                        <p className="mb-6">
                            Profesyonel güzellik hizmetlerimizden faydalanmak için hemen randevu alın.
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

export default AboutPage; 