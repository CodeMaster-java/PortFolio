import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Instagram, CheckCircle, XCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

// Endpoint do Formspree definido em .env (ex: VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/abcdefg)
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string;

const Contact: React.FC = () => {
  const { t } = useLanguage();
  // Estado para controle de envio
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) setStatus('SUCCESS');
      else setStatus('ERROR');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('ERROR');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: t('email'),
      value: 'robsonjosecorreacarvalho@gmail.com',
      href: 'mailto:robsonjosecorreacarvalho@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: t('phone'),
      value: '+55 (22) 99228-2700',
      href: 'tel:+5522992282700'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: t('location'),
      value: 'Quissamã, RJ, Brasil',
      href: 'https://www.google.com/maps/place/Quissam%C3%A3+RJ+Brasil'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: t('github'),
      href: 'https://github.com/sempai23w',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: t('instagram'),
      href: 'https://instagram.com/robson.carvalho23',
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('contactTitle')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('contactSubtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('contactHeader')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {t('contactText')}
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {info.label}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  {t('socialTitle')}
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-gray-600 dark:text-gray-400 ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder={t('placeholderName')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder={t('placeholderEmail')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition-all duration-200"
                    placeholder={t('placeholderMessage')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>{t('sendMessage')}</span>
                </button>
              </form>
              {/* Feedback Card */}
              {status !== 'IDLE' && (
                <div className={`mt-6 p-4 rounded-lg shadow-md flex items-center ${status === 'SUCCESS'
                  ? 'bg-green-50 dark:bg-green-900 border-l-4 border-green-500'
                  : 'bg-red-50 dark:bg-red-900 border-l-4 border-red-500'
                  }`}>
                  {status === 'SUCCESS' ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500" />
                  )}
                  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                    {status === 'SUCCESS' ? t('contactSuccess') : t('contactError')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;