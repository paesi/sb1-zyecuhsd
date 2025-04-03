import React, { useEffect, useState } from 'react';
import { BriefcaseIcon, HomeIcon, Users2Icon, PhoneIcon, ArrowRight, Target, Building2, Users, MapPin, Phone, Mail } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { name: 'Home', icon: HomeIcon, id: 'home' },
    { name: 'Dienstleistung', icon: BriefcaseIcon, id: 'services' },
    { name: 'Über uns', icon: Users2Icon, id: 'about' },
    { name: 'Kontakt', icon: PhoneIcon, id: 'contact' },
  ];

  const services = [
    {
      title: 'Kundengewinnung und Marketing',
      icon: Target,
      description: 'Wir entwickeln massgeschneiderte Marketingstrategien, die Ihr Unternehmen vom Wettbewerb abheben. Durch datengetriebene Analysen und innovative Kampagnen steigern wir Ihre Kundengewinnung nachhaltig. Unser Expertenteam unterstützt Sie bei der Entwicklung Ihrer Marke und der Erschliessung neuer Märkte.'
    },
    {
      title: 'Digitalisierung und Optimierung von Prozessen',
      icon: Building2,
      description: 'Von der digitalen Transformation bis zur Prozessoptimierung begleiten wir Sie auf dem Weg zum zukunftsfähigen Unternehmen. Wir analysieren Ihre bestehenden Strukturen, identifizieren Optimierungspotenziale und implementieren effiziente Lösungen. Dabei setzen wir auf bewährte Methoden und innovative Technologien.'
    },
    {
      title: 'Fachkräftegewinnung und Mitarbeiterbindung',
      icon: Users,
      description: 'In Zeiten des Fachkräftemangels unterstützen wir Sie dabei, die besten Talente zu finden und langfristig zu binden. Wir entwickeln moderne Employer-Branding-Strategien, optimieren Ihre Recruiting-Prozesse und schaffen eine Unternehmenskultur, die Mitarbeiter begeistert und motiviert.'
    }
  ];

  const team = [
    {
      name: 'Jorick Mischler',
      position: 'Verhandlungsexperte',
      description: 'Mit über 15 Jahren Erfahrung in der Strategieberatung leitet Dr. Weber unser Unternehmen und betreut wichtige Schlüsselkunden.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500'
    },
    {
      name: 'Ruben Meier',
      position: 'Strategieberater',
      description: 'Ruben berät Unternehmen dabei, wegweisende Strategien zu entwickeln und nachhaltiges Wachstum zu generieren.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500'
    },
    {
      name: 'Pascal Hofmann',
      position: 'Business Analyst',
      description: 'Pascal treibt digitale Innovation voran und optimiert Geschäftsprozesse für mehr Effizienz und Agilität.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => document.getElementById(nav.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeSection === item.id
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Ihr Partner für massgeschneiderten Unternehmenserfolg
            </h1>
            <p className="text-xl text-gray-600 mb-8">
            Als junges Consulting-Unternehmen bieten wir massgeschneiderte Beratungsleistungen, die perfekt auf Ihre spezifischen Herausforderungen zugeschnitten sind.
            Mit unserem fundierten Fachwissen und professionellen Ansatz entwickeln wir exzellente Strategien für Ihren nachhaltigen Erfolg.
            Was uns auszeichnet ist unser engagierter, partnerschaftlicher Beratungsstil – wir arbeiten proaktiv und hands-on mit Ihnen zusammen und bleiben nahbar,
            während wir mit Leidenschaft zielgerichtete Lösungen für Ihr Unternehmen vorantreiben.
            </p>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Business consulting"
              className="w-full rounded-lg shadow-xl mb-8"
            />
          </div>
        </section>

        <section id="services" className="min-h-screen flex items-center bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Unsere Dienstleistungen</h2>
            <div className="grid gap-8 md:grid-cols-1">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                  <button className="mt-4 flex items-center text-blue-600 hover:text-blue-800">
                    Jetzt kontatkieren <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Über uns</h2>
            <p className="text-lg text-gray-600 mb-12">
            Als junges, dynamisches Beratungsunternehmen setzen wir auf frische Perspektiven und innovative Lösungsansätze.
            Unsere Berater kombinieren aktuelle wissenschaftliche Erkenntnisse mit einem unkonventionellen Blick auf unternehmerische Herausforderungen und entwickeln massgeschneiderte Strategien für den Erfolg unserer Kunden.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Unser Team</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                    <p className="text-blue-600 mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kontakt</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Kontaktieren Sie uns</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">E-Mail</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="phone">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+49 123 456789"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="company">Unternehmen</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="subject">Betreff</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Worum geht es?"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">Nachricht</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Ihre Nachricht an uns"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Unsere Kontaktdaten</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-gray-600">Hauptstraße 123<br />10115 Berlin</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-gray-600">+49 (0) 30 123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium">E-Mail</p>
                      <p className="text-gray-600">info@beratungsfirma.de</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-2">Öffnungszeiten</h4>
                  <div className="text-gray-600">
                    <p>Montag - Freitag: 9:00 - 18:00 Uhr</p>
                    <p>Samstag & Sonntag: Geschlossen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;