import logo from '../images/dama.png'; // Assicurati che il percorso del logo sia corretto

export function ChiSiamo() {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      
      {/* Titolo Pagina */}
      <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 2rem' }}>
        <h1 style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>
          CHI SIAMO
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
          Professionalità, trasparenza e competenza al servizio del tuo condominio.
        </p>
      </div>

      {/* Contenuto con Logo e Testo */}
      <div className="studio-container" style={{ alignItems: 'center' }}>
        
        {/* Colonna Sinistra: LOGO STUDIO */}
        <div className="studio-img-col" style={{ background: 'transparent', boxShadow: 'none', height: 'auto', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src={logo} 
            alt="Logo DA.MA." 
            style={{ width: '80%', maxWidth: '350px', objectFit: 'contain' }} 
          />
        </div>

        {/* Colonna Destra: TESTO DI PRESENTAZIONE */}
        <div className="studio-text-col">
          <h2 style={{ color: 'var(--text-main)', fontSize: '2rem', marginBottom: '1rem' }}>
            Lo Studio DA.MA.
          </h2>
          <p>
            DA.MA. SRLS nasce dall'esperienza e dalla passione di <strong>Giuseppe Tannoia</strong> per la gestione immobiliare. 
            Il nostro studio si propone come punto di riferimento per chi cerca un'amministrazione condominiale moderna, efficiente e vicina alle persone.
          </p>
          <p>
            Crediamo fermamente che la chiarezza sia alla base della fiducia: per questo utilizziamo strumenti digitali che permettono ai condomini di verificare spese e interventi in qualsiasi momento.
          </p>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--primary)', fontWeight: '600' }}>
            "Il tuo condominio in buone mani."
          </p>
        </div>

      </div>
    </div>
  );
}