import { Linkedin, Instagram, Phone, MessageCircle, Facebook } from 'lucide-react';

export function Contatti() {
  const contactMethods = [
    {
      title: "Chiama lo Studio",
      icon: <Phone size={40} />,
      desc: "Per informazioni, appuntamenti e consulenze amministrative.",
      btnText: "Chiamaci",
      link: "tel:0885449465",
      color: "var(--primary)",
      bg: "rgba(185, 28, 28, 0.1)",
      btnClass: "btn-studio"
    },
    {
      title: "WhatsApp",
      icon: <MessageCircle size={40} />,
      desc: "Per urgenze, segnalazioni guasti o invio rapido documenti.",
      btnText: "Scrivici",
      link: "https://wa.me/393284132092",
      color: "#25D366",
      bg: "rgba(37, 211, 102, 0.1)",
      btnClass: "btn-whatsapp"
    },
    {
      title: "Facebook",
      icon: <Facebook size={40} />,
      desc: "Resta aggiornato sulle novità tramite la nostra pagina ufficiale.",
      btnText: "Seguici",
      link: "https://www.facebook.com/share/1E2txQ7zF9/?mibextid=wwXIfr",
      color: "#1877F2",
      bg: "rgba(24, 119, 242, 0.1)",
      btnStyle: { backgroundColor: '#1877F2' }
    },
    {
      title: "LinkedIn",
      icon: <Linkedin size={40} />,
      desc: "Segui il nostro profilo professionale per aggiornamenti.",
      btnText: "Collegati",
      link: "https://www.linkedin.com/company/da-ma/",
      color: "#0a66c2",
      bg: "rgba(10, 102, 194, 0.1)",
      btnStyle: { backgroundColor: '#0a66c2' }
    },
    {
      title: "Instagram",
      icon: <Instagram size={40} />,
      desc: "Scopri le nostre attività e i retroscena dello studio.",
      btnText: "Seguici",
      link: "https://www.instagram.com/damacondomini?igsh=MXhlempwbDlpYzlleA==",
      color: "#E1306C",
      bg: "rgba(225, 48, 108, 0.1)",
      btnStyle: { backgroundColor: '#E1306C' }
    }
  ];

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>CONTATTACI</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Scegli il modo più comodo per parlare con noi</p>
      </div>

      <div className="services-grid">
        {contactMethods.map((method, index) => (
          <div key={index} className="card-service">
            <div className="icon-wrapper" style={{ color: method.color, background: method.bg }}>
              {method.icon}
            </div>
            <h3 style={{ margin: '1rem 0', color: 'var(--text-main)', fontSize: '1.4rem' }}>{method.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
              {method.desc}
            </p>
            <a 
              href={method.link} 
              target={method.link.startsWith('http') ? "_blank" : "_self"} 
              rel="noopener noreferrer"
              className={`btn ${method.btnClass || ''}`}
              style={method.btnStyle}
            >
              {method.btnText.toUpperCase()}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}