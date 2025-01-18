'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Basitleştirilmiş animasyon varyantları
const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
};

// Hizmetler verisi
const services = [
    {
        id: 1,
        title: 'Saç Bakımı',
        description: 'Profesyonel saç bakımı, kesimi ve şekillendirme hizmetleri',
        image: '/hair.jpg',
        features: ['Saç Kesimi', 'Saç Boyama', 'Keratin Bakımı', 'Protein Bakımı'],
        href: '/hizmetler/sac-bakimi'
    },
    {
        id: 2,
        title: 'Cilt Bakımı',
        description: 'Kişiye özel cilt bakımı ve yüz bakım uygulamaları',
        image: '/skin.jpg',
        features: ['Hydrafacial', 'Anti-Aging', 'Akne Bakımı', 'Cilt Temizliği'],
        href: '/hizmetler/cilt-bakimi'
    },
    {
        id: 3,
        title: 'Makyaj',
        description: 'Profesyonel makyaj ve özel gün makyajı uygulamaları',
        image: '/makeup.jpg',
        features: ['Gelin Makyajı', 'Özel Gün', 'Kalıcı Makyaj', 'Doğal Makyaj'],
        href: '/hizmetler/makyaj'
    },
    {
        id: 4,
        title: 'Tırnak Bakımı',
        description: 'Manikür, pedikür ve protez tırnak uygulamaları',
        image: '/nail.jpg',
        features: ['Manikür', 'Pedikür', 'Protez Tırnak', 'Kalıcı Oje'],
        href: '/hizmetler/tirnak-bakimi'
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
            {/* Hero Section - Basitleştirilmiş */}
            <div className="relative h-[50vh] overflow-hidden">
                <Image
                    src="/about.jpg"
                    alt="Hizmetlerimiz"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        {...fadeIn}
                        className="text-center px-4"
                    >
                        <h1 className="text-3xl sm:text-4xl font-serif text-white mb-4">
                            Hizmetlerimiz
                        </h1>
                        <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
                            Size özel profesyonel güzellik ve bakım hizmetlerimiz
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Services Grid - Optimize edilmiş */}
            <section className="py-12">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                href={service.href}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="relative h-48 sm:h-56">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover hover:scale-105 hover:rotate-1 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                                        <h2 className="text-xl sm:text-2xl font-serif text-white mb-2">
                                            {service.title}
                                        </h2>
                                        <p className="text-sm sm:text-base text-gray-200">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 sm:p-6">
                                    <div className="grid grid-cols-2 gap-2">
                                        {service.features.map((feature, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center text-gray-600 text-sm"
                                            >
                                                <svg
                                                    className="w-4 h-4 mr-2 text-primary-500 flex-shrink-0"
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
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Basitleştirilmiş */}
            <section className="py-12 bg-gray-50">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-serif mb-6">
                        Güzellik Yolculuğunuza
                        <span className="gradient-text"> Bizimle Başlayın</span>
                    </h2>
                    <a
                        href="https://wa.me/905551112233"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        </svg>
                        WhatsApp&apos;tan Randevu Al
                    </a>
                </div>
            </section>
        </div>
    )
} 