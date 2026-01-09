import './ShinyText.css';

const ShinyText = ({ 
  text, 
  color = '#991b1b',    // Rosso scuro (default)
  shineColor = '#ff8888', // Rosso chiaro per il riflesso (default)
  speed = 3             // Velocità in secondi
}) => {
  return (
    <span 
      className="shiny-text"
      style={{
        '--shiny-color': color,
        '--shiny-shine': shineColor,
        '--shiny-speed': `${speed}s`
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;