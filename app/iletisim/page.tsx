'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Basitleştirilmiş animasyon varyantı
const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
};

// İletişim bilgileri
const contactInfo = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Adres',
        content: 'Caferağa Mah. Moda Cad. No: 123, Kadıköy/İstanbul',
        link: 'https://maps.google.com/?q=kadiköy+istanbul'
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        title: 'Telefon',
        content: '+90 555 111 2233',
        link: 'tel:+905551112233'
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: 'E-posta',
        content: 'info@beautysalon.com',
        link: 'mailto:info@beautysalon.com'
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Çalışma Saatleri',
        content: 'Her gün 09:00 - 21:00'
    }
];

// Sosyal medya linkleri
const socialLinks = [
    {
        name: 'Instagram',
        href: 'https://instagram.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        )
    },
    {
        name: 'Facebook',
        href: 'https://facebook.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
        )
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
        )
    }
];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
            {/* Hero Section */}
            <div className="relative h-[40vh] overflow-hidden">
                <Image
                    src="/contact.jpg"
                    alt="İletişim"
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
                            İletişim
                        </h1>
                        <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
                            Sizinle iletişime geçmek için birçok yol var
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Contact Section */}
            <section className="py-12">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
                            <h2 className="text-2xl font-serif mb-6">Bize Ulaşın</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Ad Soyad
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        E-posta
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Telefon
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Mesaj
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                                >
                                    Gönder
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {contactInfo.map((item) => (
                                    <div
                                        key={item.title}
                                        className="bg-white p-6 rounded-xl shadow-sm"
                                    >
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="p-2 bg-primary-500 text-white rounded-lg">
                                                {item.icon}
                                            </div>
                                            <h3 className="font-semibold">{item.title}</h3>
                                        </div>
                                        {item.link ? (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 hover:text-primary-500 transition-colors"
                                            >
                                                {item.content}
                                            </a>
                                        ) : (
                                            <p className="text-gray-600">{item.content}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-semibold mb-4">Sosyal Medya</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-primary-500 hover:text-white transition-colors"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Map */}
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-semibold mb-4">Konum</h3>
                                <div className="relative h-[300px] rounded-lg overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6504900120997!2d29.026392776944614!3d40.99050897134731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab8679bfb3d31%3A0x7d75715e081dfa5c!2sKad%C4%B1k%C3%B6y%2C%20Istanbul!5e0!3m2!1sen!2str!4v1709667998065!5m2!1sen!2str"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 