import mainBanner from '../images/cerignola.jpg'; 
import imgCompetenza from '../images/competenza.png';    
import imgTrasparenza from '../images/trasparenza.jpg';   
import imgProfessionalita from '../images/professionalita.jpg'; 
import imgStudio from '../images/dama.png';         
import imgGiuseppe from '../images/papa.jpg'; 

export function Home() {
  
  const coreValues = [
    { title: "COMPETENZA", image: imgCompetenza },
    { title: "TRASPARENZA", image: imgTrasparenza },
    { title: "PROFESSIONALITÀ", image: imgProfessionalita }
  ];

  return (
    <div>
      {/* 1. HERO BANNER */}
      <div className="hero-full-width" style={{ backgroundImage: `url(${mainBanner})` }}>
        <div className="hero-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}></div>
        <div className="hero-content">
          <h1 className="hero-title">AMMINISTRAZIONE<br />CONDOMINIALE</h1>
          <p className="hero-subtitle-text">DA.MA. SRLS</p>
        </div>
      </div>

      {/* FASCIA PROPRIETARIO (Modificata per essere più grande) */}
      <div className="owner-strip">
        <div className="owner-strip-content">
          <div className="owner-image-wrapper">
            <img src={imgGiuseppe} alt="Giuseppe Tannoia" />
          </div>
          <div className="owner-info">
            <h2>Giuseppe Tannoia</h2>
            <p>Amministratore Unico & Fondatore</p>
          </div>
        </div>
      </div>

      {/* 2. INTRO */}
      <div className="intro-section">
        <p className="intro-text">
          "L'esperienza e la formazione costante su ogni argomento riguardante la materia condominiale,
          consentono di offrire un servizio di amministrazione di assoluto livello."
        </p>
      </div>

      {/* 3. GRIGLIA VALORI */}
      <div className="values-grid">
        {coreValues.map((val, index) => (
          <div key={index} className="value-card">
            <div className="value-image-box">
              <img src={val.image} alt={val.title} />
            </div>
            <h3 className="value-title">{val.title}</h3>
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
            <div style={{ marginTop: '2.5rem' }}>
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
        <p className="intro-divider" style={{ marginBottom: '2rem' }}>Dove ci trovi:</p>     
        <div style={{ marginTop: '2rem', borderRadius: '4px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.040498497081!2d15.896046529345712!3d41.26445411033164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133831f43d8a1f99%3A0xc47b6d95dbd09e3a!2sGestione%20condominiali%20Da.Ma.%20Srls%20amministratore%20unico%20Tannoia%20Giuseppe!5e0!3m2!1sit!2sit!4v1767985118421!5m2!1sit!2sit" 
            width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Mappa Studio"
          ></iframe>
        </div>
      </div>
    </div>
  );
}