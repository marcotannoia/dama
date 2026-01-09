import { Linkedin, Instagram, Phone, MessageCircle } from 'lucide-react';

export function Contatti() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      
      <div style={{ marginBottom: '3rem', marginTop: '2rem' }}>
        <h1 style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Contattaci</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Scegli il modo più comodo per parlare con noi</p>
      </div>

      <div className="services-grid">
        
        {/* Box Chiama */}
        <div className="card-service">
          <div className="icon-wrapper">
            <Phone size={40} />
          </div>
          <h3 style={{ margin: '1rem 0', color: 'var(--text-main)', fontSize: '1.4rem' }}>Chiama lo Studio</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Per informazioni, appuntamenti e consulenze amministrative.
          </p>
          <a href="tel:0885449465" className="btn btn-studio">
            CHIAMACI
          </a>
        </div>

        {/* Box WhatsApp */}
        <div className="card-service">
          <div className="icon-wrapper" style={{ color: '#25D366', background: 'rgba(37, 211, 102, 0.1)' }}>
            <MessageCircle size={40} />
          </div>
          <h3 style={{ margin: '1rem 0', color: 'var(--text-main)', fontSize: '1.4rem' }}>WhatsApp</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Per urgenze, segnalazioni guasti o invio rapido documenti.
          </p>
          <a href="https://wa.me/393284132092" target="_blank" className="btn btn-whatsapp">
            SCRIVICI
          </a>
        </div>

        {/* Box LinkedIn */}
        <div className="card-service">
          <div className="icon-wrapper" style={{ color: '#0a66c2', background: 'rgba(10, 102, 194, 0.1)' }}>
            <Linkedin size={40} />
          </div>
          <h3 style={{ margin: '1rem 0', color: 'var(--text-main)', fontSize: '1.4rem' }}>LinkedIn</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Segui il nostro profilo professionale per aggiornamenti.
          </p>
          <a href="https://www.linkedin.com/company/da-ma/" target="_blank" className="btn btn-social" style={{ backgroundColor: '#0a66c2', color: 'white' }}>
            COLLEGATI
          </a>
        </div>

        {/* Box Instagram */}
        <div className="card-service">
          <div className="icon-wrapper" style={{ color: '#E1306C', background: 'rgba(225, 48, 108, 0.1)' }}>
            <Instagram size={40} />
          </div>
          <h3 style={{ margin: '1rem 0', color: 'var(--text-main)', fontSize: '1.4rem' }}>Instagram</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Scopri le nostre attività e i retroscena dello studio.
          </p>
          <a href="#" target="_blank" className="btn btn-social" style={{ backgroundColor: '#E1306C', color: 'white' }}>
            SEGUICI
          </a>
        </div>

      </div>
    </div>
  );
}