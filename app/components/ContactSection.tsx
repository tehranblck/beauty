'use client'
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
    return (
        <section className="bg-light py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8">
                            <h2 className="text-3xl font-serif mb-6">İletişime Geçin</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">E-posta</label>
                                    <input
                                        type="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Mesajınız</label>
                                    <textarea
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors"
                                >
                                    Gönder
                                </button>
                            </form>
                        </div>
                        <div className="bg-secondary p-8 text-white">
                            <h3 className="text-2xl font-serif mb-4">İletişim Bilgileri</h3>
                            <div className="space-y-4">
                                <p>📍 Adres: İstanbul, Türkiye</p>
                                <p>📞 Telefon: +90 (212) 555 55 55</p>
                                <p>✉️ E-posta: info@nurcanbeautysalon.com</p>
                                <div className="pt-4">
                                    <h4 className="text-xl mb-2">Çalışma Saatleri</h4>
                                    <p>Pazartesi - Cumartesi: 09:00 - 20:00</p>
                                    <p>Pazar: 10:00 - 18:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection; 