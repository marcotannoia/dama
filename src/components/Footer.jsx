import React from 'react';

const Footer = () => {
  const formspreeEndpoint = "https://formspree.io/f/xbddjdvl";

  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* BOX PREVENTIVO */}
        <div className="footer-quote-box">
          <h2>Vuoi un preventivo?</h2>
          <p>Compila il modulo sottostante, ti risponderemo al più presto.</p>
          
          <form action={formspreeEndpoint} method="POST" className="quote-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Il tuo nome" required />
              </div>
              <div className="form-group">
                <label htmlFor="cognome">Cognome</label>
                <input type="text" id="cognome" name="cognome" placeholder="Il tuo cognome" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="esempio@mail.it" required />
            </div>

            <div className="form-group">
              <label htmlFor="messaggio">Testo del messaggio</label>
              <textarea id="messaggio" name="messaggio" rows="4" placeholder="Descrivi brevemente la tua richiesta..." required></textarea>
            </div>

            <input type="hidden" name="_next" value="https://tuosito.it/contatti" />
            <button type="submit" className="btn btn-studio">Invia Richiesta</button>
          </form>
        </div>
        
        {/* DATI LEGALI OBBLIGATORI */}
        <div className="footer-legal">
          <p><strong>DA.MA. SRLS</strong></p>
          <p>Sede Legale: Viale Franklyn Delano Roosevelt 5, Cerignola (FG)</p>
          <p>P.IVA e C.F.: Piva e CF 04251520716 </p>
          <p>PEC:  studiodama@legpec.it</p>
          <p>Telefono: 0885/449465</p>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DA.MA. SRLS - Giuseppe Tannoia. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;