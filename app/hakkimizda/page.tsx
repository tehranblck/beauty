'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Animasyon varyantları
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

const fadeInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
}

const fadeInRight = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
}

// Takım üyeleri verisi
const teamMembers = [
    {
        name: 'Ayşe Yılmaz',
        role: 'Kurucu & Baş Stilist',
        image: '/member1.jpg',
        description: '15 yıllık deneyim'
    },
    {
        name: 'Zeynep Kaya',
        role: 'Saç Tasarım Uzmanı',
        image: '/member2.jpg',
        description: '8 yıllık deneyim'
    },
    {
        name: 'Elif Demir',
        role: 'Makyaj Uzmanı',
        image: '/member3.jpg',
        description: '10 yıllık deneyim'
    },
    {
        name: 'Merve Şahin',
        role: 'Cilt Bakım Uzmanı',
        image: '/member4.jpg',
        description: '12 yıllık deneyim'
    }
]

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20 sm:pt-24">
            {/* Hero Section */}
            <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/about.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        {...fadeInUp}
                        className="text-center px-4 sm:px-6"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">
                            Hakkımızda
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                            2008&apos;den beri profesyonel güzellik ve bakım hizmetleri sunuyoruz
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Story Section */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <motion.div
                            {...fadeInLeft}
                            className="order-2 lg:order-1"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">
                                Hikayemiz
                            </h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    2008 yılında küçük bir salonla başlayan hikayemiz, bugün İstanbul&apos;un iki farklı noktasında,
                                    modern ve konforlu salonlarımızda devam ediyor.
                                </p>
                                <p>
                                    Misyonumuz, en son trendleri ve teknikleri kullanarak müşterilerimize en iyi hizmeti sunmak ve
                                    onların kendilerini özel hissetmelerini sağlamak.
                                </p>
                                <p>
                                    Deneyimli ekibimiz ve kaliteli ürünlerimizle, güzellik ve bakım konusunda tüm ihtiyaçlarınıza
                                    profesyonel çözümler sunuyoruz.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            {...fadeInRight}
                            className="order-1 lg:order-2"
                        >
                            <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-custom">
                                <Image
                                    src="/team.jpg"
                                    alt="Hikayemiz"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    className="object-cover hover-opacity"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-12 sm:py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            {...fadeInUp}
                            className="bg-white p-6 sm:p-8 rounded-2xl shadow-custom hover-lift"
                        >
                            <div className="w-12 h-12 bg-primary-500 text-white rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-serif mb-4">Misyonumuz</h3>
                            <p className="text-gray-600">
                                Müşterilerimize en kaliteli hizmeti sunarak, onların güzellik ve bakım ihtiyaçlarını en iyi şekilde
                                karşılamak ve kendilerini özel hissetmelerini sağlamak.
                            </p>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-6 sm:p-8 rounded-2xl shadow-custom hover-lift"
                        >
                            <div className="w-12 h-12 bg-secondary-500 text-white rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-serif mb-4">Vizyonumuz</h3>
                            <p className="text-gray-600">
                                Güzellik ve bakım sektöründe öncü olmak, yenilikçi yaklaşımlarla müşterilerimize en iyi deneyimi
                                yaşatmak ve sürekli gelişerek büyümeye devam etmek.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        {...fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">
                            Profesyonel
                            <span className="gradient-text">
                                {' '}Ekibimiz
                            </span>
                        </h2>
                        <p className="text-gray-600">
                            Deneyimli ve uzman kadromuzla hizmetinizdeyiz
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl overflow-hidden shadow-custom hover-lift"
                            >
                                <div className="relative h-64 sm:h-72">
                                    <Image style={{ transition: '0.3s all ease-in-out' }}
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        quality={100}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover hover:scale-110 overflow-hidden transition-all duration-500 hover-opacity"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                                    <p className="text-primary-500 text-sm mb-2">{member.role}</p>
                                    <p className="text-gray-600 text-sm">{member.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Parallax Section */}
            <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/parallax.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/80 to-secondary-500/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        {...fadeInUp}
                        className="text-center text-white px-4 sm:px-6"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">
                            Güzelliğiniz İçin Buradayız
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto">
                            Profesyonel ekibimiz ve modern salonlarımızla sizlere en iyi hizmeti sunmaya devam ediyoruz
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        {...fadeInUp}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-2xl sm:text-3xl font-serif mb-6">
                            Siz de
                            <span className="gradient-text">
                                {' '}Ailemize Katılın
                            </span>
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Güzellik yolculuğunuza bizimle başlayın
                        </p>
                        <motion.a
                            href="https://wa.me/+905555555555"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 transition-colors hover-glow"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp&apos;tan Randevu Al
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage 