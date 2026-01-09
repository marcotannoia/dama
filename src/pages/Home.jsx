import { Building2, ClipboardCheck, Percent, BookOpen, Droplet, HandCoins } from 'lucide-react';
import ShinyText from '../components/ShinyText';
import bannerImage from '../images/dama.png';

// 1. IMPORTA LA TUA IMMAGINE QUI (Assicurati che il file esista!)
// Se non hai ancora la foto, usa questo link di prova:

// import bannerImage from '../assets/banner.jpg'; 

export function Home() {
  const services = [
    { title: "Amministrazione Condominiale", icon: <Building2 size={32}/>, text: "Gestione trasparente e professionale del tuo immobile." },
    { title: "Revisione Bilanci per conto terzi", icon: <ClipboardCheck size={32}/>, text: "Analisi accurata e verifica contabile dei bilanci condominiali." },
    { title: "Redazione Tabelle Millesimali", icon: <Percent size={32}/>, text: "Calcolo preciso delle quote di proprietà e ripartizione spese." },
    { title: "Stesura Regolamenti Condominiali", icon: <BookOpen size={32}/>, text: "Redazione di norme chiare per la convivenza civile." },
    { title: "Pratiche Acquedotto Pugliese", icon: <Droplet size={32}/>, text: "Gestione volture, allacci e problematiche idriche." },
    { title: "Recupero Crediti", icon: <HandCoins size={32}/>, text: "Gestione efficace delle morosità e delle pratiche legali." },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="hero-huge-text">
          <ShinyText 
            text={<>DA.MA.<br />GIUSEPPE TANNOIA</>} 
            speed={4} 
            color="#991b1b" 
            shineColor="#ff4d4d" 
            spread={180} 
            direction="right" 
          />
        </div>
        <p className="hero-subtitle">Professionalità e competenza al tuo servizio</p>
      </div>

      {/* --- NUOVO BANNER FOTOGRAFICO --- */}
      {/* Passiamo l'immagine come background tramite style in linea */}
      <div 
        className="banner-section" 
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
      </div>
      {/* -------------------------------- */}

      {/* SERVIZI */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h3 style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '0.5rem', fontWeight: '700' }}>
          I Nostri Servizi
        </h3>
        <p style={{color: 'var(--text-muted)', fontSize: '1.1rem'}}>
          Tutto ciò di cui il tuo condominio ha bisogno
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="card-service">
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3 style={{margin: '0.5rem 0', color: 'var(--text-main)'}}>{service.title}</h3>
              <p style={{fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0}}>{service.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MAPPA */}
      <div className="map-section">
        <h2 style={{color: 'var(--primary)', marginBottom: '0.5rem'}}>Ci troviamo qui!</h2>
        <p style={{color: 'var(--text-muted)'}}>Vieni a trovarci in studio per una consulenza.</p>
        <div style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.123!2d16.8!3d41.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA2JzAwLjAiTiAxNsKwNDgnMDAuMCJF!5e0!3m2!1sit!2sit!4v1234567890" 
            width="100%" 
            height="350" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  );
}