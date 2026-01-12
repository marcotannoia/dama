import { Building2, ClipboardCheck, Percent, BookOpen, Droplet, HandCoins } from 'lucide-react';
import { Link } from 'react-router-dom'; // Importante per il collegamento interno

export function Servizi() {
  const services = [
    { title: "Amministrazione Condominiale", icon: <Building2 size={32}/>, text: "Gestione ordinaria e straordinaria del tuo immobile con reperibilità garantita." },
    { title: "Revisione Bilanci", icon: <ClipboardCheck size={32}/>, text: "Analisi accurata, verifica contabile e ricostruzione di bilanci condominiali pregressi." },
    { title: "Tabelle Millesimali", icon: <Percent size={32}/>, text: "Redazione e revisione delle tabelle millesimali per una corretta ripartizione delle spese." },
    { title: "Regolamenti di Condominio", icon: <BookOpen size={32}/>, text: "Stesura e aggiornamento di regolamenti condominiali contrattuali e assembleari." },
    { title: "Gestione Pratiche Idriche", icon: <Droplet size={32}/>, text: "Assistenza per volture, nuovi allacci e gestione problematiche Acquedotto Pugliese." },
    { title: "Recupero Crediti", icon: <HandCoins size={32}/>, text: "Azioni mirate per la gestione delle morosità e tutela legale del condominio." },
  ];

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem', textAlign: 'center' }}>
      
      <div style={{ padding: '0 2rem', marginBottom: '4rem' }}>
        <h1 style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>
          I NOSTRI SERVIZI
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
          Soluzioni complete per ogni esigenza del tuo stabile.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="card-service">
            <div className="icon-wrapper">
              {service.icon}
            </div>
            <h3 style={{ margin: '1rem 0', color: 'var(--text-main)', fontSize: '1.3rem' }}>{service.title}</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>{service.text}</p>
          </div>
        ))}
      </div>

      {/* --- NUOVA SEZIONE BOTTONE CONTATTI --- */}
      <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
        <Link 
          to="/contatti" 
          className="btn btn-studio" 
          style={{ maxWidth: '250px', padding: '1rem 3rem' }}
        >
          CONTATTACI
        </Link>
      </div>

    </div>
  );
}