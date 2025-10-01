"use client";

import React, { useState } from 'react';
import { Menu, X, Mail, Phone, Facebook, Instagram, Linkedin, ArrowRight, CheckCircle } from 'lucide-react';

export default function KladrivaWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const services = [
    { title: 'Logo Design', description: 'Création de logos uniques qui incarnent votre identité' },
    { title: 'Identité Visuelle', description: 'Développement complet de votre image de marque' },
    { title: 'Packaging', description: 'Designs d\'emballage qui attirent et convertissent' },
    { title: 'Réseaux Sociaux', description: 'Visuels impactants pour vos plateformes sociales' },
    { title: 'Print', description: 'Supports imprimés professionnels et élégants' },
    { title: 'Web Design', description: 'Interfaces web modernes et intuitives' }
  ];

  const projects = [
    {
      title: 'Identité Visuelle - Café Lumière',
      description: 'Création complète de l\'identité visuelle pour une chaîne de cafés premium. Logo, charte graphique, packaging et supports de communication.',
      image: 'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=800&h=600&fit=crop'
    },
    {
      title: 'Packaging - Éco Cosmétiques',
      description: 'Design de packaging éco-responsable pour une marque de cosmétiques naturels. Approche minimaliste mettant en valeur les valeurs durables de la marque.',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=600&fit=crop'
    },
    {
      title: 'Branding - Tech Innovate',
      description: 'Refonte complète de l\'image de marque d\'une startup technologique. Logo moderne, palette de couleurs dynamique et supports digitaux.',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop'
    },
    {
      title: 'Print - Festival d\'Art Urbain',
      description: 'Conception d\'affiches, flyers et supports print pour un festival culturel. Design audacieux et coloré reflétant l\'énergie de l\'événement.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Nouveau message de ${formData.name}`);
    const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:kladriva@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                Kladriva
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Accueil</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">À Propos</a>
              <a href="#works" className="text-gray-700 hover:text-orange-500 transition-colors">Réalisations</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md">Accueil</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md">À Propos</a>
              <a href="#works" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md">Réalisations</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Donnez vie à votre <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">vision</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nous créons des identités visuelles puissantes qui propulsent votre entreprise vers de nouveaux sommets. Excellence, créativité et résultats garantis.
              </p>
              <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Démarrer votre projet
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop" 
                alt="Design créatif" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Nos Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-orange-100">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg mb-4 flex items-center justify-center">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                alt="Notre équipe" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">À Propos de Kladriva</h3>
              <p className="text-lg text-gray-700 mb-6">
                Chez Kladriva, nous croyons que chaque entreprise mérite une identité visuelle qui la distingue. Notre équipe de designers passionnés allie expertise technique et créativité débordante pour transformer vos idées en réalité visuelle percutante.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Depuis notre création, nous avons accompagné des dizaines d'entreprises dans leur transformation digitale et visuelle. Notre approche centrée sur vos objectifs commerciaux nous permet de créer des designs qui ne sont pas seulement beaux, mais qui génèrent des résultats concrets.
              </p>
              <p className="text-lg text-gray-700">
                Que vous soyez une startup ambitieuse ou une entreprise établie cherchant à se réinventer, nous avons les compétences et la vision pour booster votre visibilité et marquer les esprits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Works */}
      <section id="works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nos Réalisations</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nous avons aidé nos clients à transformer leur vision en succès visuel. Chaque projet est une nouvelle aventure créative où excellence et innovation se rencontrent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Contactez-Nous</h3>
            <p className="text-xl text-gray-600">
              Prêt à donner vie à votre projet ? Parlons-en ensemble !
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Parlez-nous de votre projet..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                Envoyer le message
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-700 font-medium mb-4">Suivez-nous</p>
              <div className="flex justify-center space-x-6">
                <a href="https://facebook.com/kladriva" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors">
                  <Facebook size={32} />
                </a>
                <a href="https://instagram.com/kladriva" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors">
                  <Instagram size={32} />
                </a>
                <a href="https://linkedin.com/company/kladriva" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors">
                  <Linkedin size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            Kladriva
          </h2>
          <p className="text-gray-400 mb-6">
            Votre partenaire en excellence graphique
          </p>
          <div className="flex justify-center items-center space-x-2 text-gray-400">
            <Mail size={18} />
            <a href="mailto:kladriva@gmail.com" className="hover:text-orange-400 transition-colors">
              kladriva@gmail.com
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2025 Kladriva. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}