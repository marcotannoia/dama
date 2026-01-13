import logo from '../images/dama.png'; 
import imgGiuseppe from '../images/papa.jpg'; 

export function ChiSiamo() {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      
      {/* Titolo Pagina */}
      <div style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 2rem' }}>
        <h1 style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>
          CHI SIAMO
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
          Professionalità, trasparenza e competenza al servizio del tuo condominio.
        </p>
      </div>

      {/* Contenuto centrato con foto grande */}
      <div className="studio-container" style={{ flexDirection: 'column', textAlign: 'center', gap: '3rem' }}>
        
        {/* FOTO PROFILO GRANDE CENTRALE */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <img 
            src={imgGiuseppe} 
            alt="Giuseppe Tannoia" 
            style={{ 
              width: '220px', 
              height: '220px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              border: '5px solid var(--primary)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }} 
          />
          <div>
            <h2 style={{ color: 'var(--text-main)', fontSize: '2.2rem', margin: 0 }}>Giuseppe Tannoia</h2>
            <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1.3rem', textTransform: 'uppercase' }}>Titolare e Amministratore</p>
          </div>
        </div>

        {/* TESTO DI PRESENTAZIONE */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            DA.MA. SRLS nasce dall'esperienza e dalla passione di <strong>Giuseppe Tannoia</strong> per la gestione immobiliare. 
            Il nostro studio si propone come punto di riferimento per chi cerca un'amministrazione condominiale moderna, efficiente e vicina alle persone.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Crediamo fermamente che la chiarezza sia alla base della fiducia: per questo utilizziamo strumenti digitali che permettono ai condomini di verificare spese e interventi in qualsiasi momento.
          </p>
          
          <div style={{ marginTop: '3rem', padding: '2rem', background: '#f8fafc', borderRadius: '12px' }}>
             <img src={logo} alt="Logo DA.MA." style={{ width: '200px', marginBottom: '1.5rem' }} />
             <p style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: '600', fontSize: '1.2rem', margin: 0 }}>
               "Il tuo condominio in buone mani."
             </p>
          </div>
        </div>

      </div>
    </div>
  );
}