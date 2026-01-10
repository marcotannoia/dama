import mainBanner from '../images/cerignola.jpg'; // Assicurati che il nome file sia corretto
import imgCompetenza from '../images/competenza.png';    
import imgTrasparenza from '../images/trasparenza.jpg';   
import imgProfessionalita from '../images/professionalita.jpg'; 
import imgStudio from '../images/dama.png';        

export function Home() {
  
  const coreValues = [
    { 
      title: "COMPETENZA", 
      image: imgCompetenza, 

    },
    { 
      title: "TRASPARENZA", 
      image: imgTrasparenza, 
    },
    { 
      title: "PROFESSIONALITÀ", 
      image: imgProfessionalita, 
  
    }
  ];

  return (
    <div>
      {/* 1. HERO BANNER */}
      <div 
        className="hero-full-width" 
        style={{ backgroundImage: `url(${mainBanner})` }} 
      >
        <div className="hero-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}></div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            AMMINISTRAZIONE<br />CONDOMINIALE
          </h1>
          <p className="hero-subtitle-text">
            DA.MA. SRLS - Giuseppe Tannoia
          </p>
        </div>
      </div>

      {/* 2. INTRO */}
      <div className="intro-section">
        <p className="intro-text">
          "L'esperienza e la formazione costante su ogni argomento riguardante la materia condominiale,
          consentono di offrire un servizio di amministrazione di assoluto livello.
          <br /><br />
          Tutta l'attività è incentrata sui seguenti principi cardine:"
        </p>
      </div>

      {/* 3. GRIGLIA VALORI (Senza bottoni "Scopri di più") */}
      <div className="values-grid">
        {coreValues.map((val, index) => (
          <div key={index} className="value-card">
            <div className="value-image-box">
              <img src={val.image} alt={val.title} />
            </div>
            <h3 className="value-title">{val.title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0' }}>{val.desc}</p>
          </div>
        ))}
      </div>

      {/* 4. SEZIONE STUDIO */}
      <div className="studio-section-wrapper">
        <div className="studio-container">
          <div className="studio-text-col">
            <h2 className="section-title">Lo Studio DA.MA.</h2>
            <p>
              Siamo un punto di riferimento per l'amministrazione immobiliare. 
              Il nostro obiettivo è garantire la <strong>massima serenità</strong> ai condomini attraverso una gestione trasparente e moderna.
            </p>
            <p>
              Ci avvaliamo di collaboratori esperti e software all'avanguardia per monitorare guasti, contabilità e scadenze in tempo reale.
            </p>
            <div style={{ marginTop: '2rem' }}>
               <a href="/contatti" className="btn btn-studio" style={{ maxWidth: '200px' }}>CONTATTACI</a>
            </div>
          </div>
          <div className="studio-img-col">
            <img src={imgStudio} alt="Interno Studio" />
          </div>
        </div>
      </div>

      {/* 5. MAPPA */}
      <div className="map-section" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p className="intro-divider" style={{ marginBottom: '2rem' }}>
          Dove ci trovi:
        </p>     
        <div style={{ marginTop: '2rem', borderRadius: '4px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.123!2d16.8!3d41.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA2JzAwLjAiTiAxNsKwNDgnMDAuMCJF!5e0!3m2!1sit!2sit!4v1234567890" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Mappa Studio"
          >
          </iframe>
        </div>
      </div>
    </div>
  );
}