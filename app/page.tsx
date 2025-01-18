'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// Animasyon varyantları
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

// Testimonials verisi
const testimonials = [
  {
    id: 1,
    name: 'Ayşe Yılmaz',
    role: 'Düzenli Müşteri',
    image: '/test1.jpg',
    comment: 'Profesyonel ekip ve kaliteli hizmet. Her ziyaretimde memnun ayrılıyorum.',
    rating: 5
  },
  {
    id: 2,
    name: 'Zeynep Kaya',
    role: 'İş İnsanı',
    image: '/test2.jpg',
    comment: 'Yoğun iş tempomda kendimi şımartmak için en iyi adres. Özellikle cilt bakımları harika.',
    rating: 5
  },
  {
    id: 3,
    name: 'Elif Demir',
    role: 'Influencer',
    image: '/test3.jpg',
    comment: 'Modern teknikler ve trend uygulamalar için tercih ettiğim salon. Çok memnunum.',
    rating: 5
  }
]

// İstatistikler
const stats = [
  { id: 1, value: '15+', label: 'Yıllık Deneyim' },
  { id: 2, value: '10K+', label: 'Mutlu Müşteri' },
  { id: 3, value: '50+', label: 'Uzman Personel' },
  { id: 4, value: '2', label: 'Modern Salon' }
]

// Öne çıkan hizmetler
const featuredServices = [
  {
    id: 1,
    title: 'Saç Bakımı',
    description: 'Profesyonel saç bakımı ve şekillendirme',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
      </svg>
    ),
    image: '/hair.jpg',
    href: '/hizmetler/sac-bakimi'
  },
  {
    id: 2,
    title: 'Cilt Bakımı',
    description: 'Kişiye özel cilt bakımı ve tedaviler',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    image: '/skin.jpg',
    href: '/hizmetler/cilt-bakimi'
  },
  {
    id: 3,
    title: 'Makyaj',
    description: 'Profesyonel makyaj uygulamaları',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    image: '/makeup.jpg',
    href: '/hizmetler/makyaj'
  }
]

// Özel teklifler
const specialOffers = [
  {
    id: 1,
    title: 'Yaz Kampanyası',
    description: 'Tüm cilt bakımlarında %20 indirim',
    validUntil: '31 Ağustos',
    image: '/summer.jpg'
  },
  {
    id: 2,
    title: 'Gelin Paketi',
    description: 'Saç, makyaj ve cilt bakımı özel paketi',
    validUntil: 'Süresiz',
    image: '/bride.jpg'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/bg.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="container">
            <motion.div
              {...fadeInUp}
              className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6">
                Güzelliğinizi
                <span className="gradient-text">
                  {' '}Öne Çıkarın
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8">
                2008&apos;den beri profesyonel güzellik ve bakım hizmetleri sunuyoruz.
                Deneyimli ekibimiz ve modern salonlarımızla hizmetinizdeyiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="https://wa.me/905551112233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 transition-colors hover-glow"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                  WhatsApp&apos;tan Randevu Al
                </motion.a>
                <motion.a
                  href="/hizmetler"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 backdrop-blur-sm transition-colors hover-glow"
                >
                  Hizmetlerimizi İncele
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">
              Öne Çıkan
              <span className="gradient-text">
                {' '}Hizmetlerimiz
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Size özel bakım ve güzellik hizmetlerimizle tanışın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-custom hover-lift"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover hover-opacity"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary-500 text-white rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href={service.href}>
                    <span className="block w-full py-3 bg-gray-50 text-primary-500 font-semibold rounded-lg hover:bg-primary-50 transition-colors text-center">
                      Detaylı Bilgi
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">
              Özel
              <span className="gradient-text">
                {' '}Teklifler
              </span>
            </h2>
            <p className="text-gray-600">
              Sizin için hazırladığımız özel kampanyalar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-custom hover-lift"
              >
                <div className="relative h-64">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-semibold mb-2">{offer.title}</h3>
                    <p className="text-gray-200 mb-2">{offer.description}</p>
                    <p className="text-sm text-primary-200">Geçerlilik: {offer.validUntil}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">
              Mutlu
              <span className="gradient-text">
                {' '}Müşterilerimiz
              </span>
            </h2>
            <p className="text-gray-600">
              Müşterilerimizin deneyimleri ve yorumları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-2xl shadow-custom hover-lift"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                <div className="flex text-primary-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/cta-bg.jpg"
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-secondary-500/90" />
        </div>
        <div className="relative container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-serif mb-6">
              Güzellik Yolculuğunuza Bugün Başlayın
            </h2>
            <p className="text-lg text-gray-100 mb-8">
              Size özel bakım ve güzellik hizmetlerimizle tanışmak için hemen randevu alın.
            </p>
            <motion.a
              href="https://wa.me/905551112233"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-full hover:bg-gray-100 transition-colors hover-glow"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              WhatsApp&apos;tan Randevu Al
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  )
}
