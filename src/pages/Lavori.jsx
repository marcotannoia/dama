import React from 'react';
import uno from '../images/1.jpeg';
import due from '../images/2.jpeg';
import tre from '../images/3.jpeg';
import quattro from '../images/4.jpeg';
import cinque from '../images/5.jpeg';
import sei from '../images/6.jpeg';
import sette from '../images/7.jpeg';
import otto from '../images/8.jpeg';
import nove from '../images/9.jpeg';
// Saltiamo il 10 perché manca nella cartella
import undici from '../images/11.jpeg';
import dodici from '../images/12.jpeg';
import tredici from '../images/13.jpeg';
import quattordici from '../images/14.jpeg';
import quindici from '../images/15.jpeg';
import sedici from '../images/16.jpeg';
import diciasette from '../images/17.jpeg';
import diciannove from '../images/19.jpeg';

export function Lavori() {
  const gallery = [
    { id: 1, image: uno }, { id: 2, image: due }, { id: 3, image: tre },
    { id: 4, image: quattro }, { id: 5, image: cinque }, { id: 6, image: sei },
    { id: 7, image: sette }, { id: 8, image: otto }, { id: 9, image: nove },
    { id: 11, image: undici }, { id: 12, image: dodici }, { id: 13, image: tredici },
    { id: 14, image: quattordici }, { id: 15, image: quindici }, { id: 16, image: sedici },
    { id: 17, image: diciasette }, { id: 19, image: diciannove }
  ];

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 2rem' }}>
        <h1 style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>
          I NOSTRI LAVORI
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
          Galleria fotografica degli interventi gestiti dallo Studio DA.MA.
        </p>
      </div>

      <div className="values-grid">
        {gallery.map((item) => (
          <div key={item.id} className="value-card" style={{ marginBottom: '0' }}>
            <div className="value-image-box" style={{ margin: '0', borderRadius: '8px', height: '250px' }}>
              <img 
                src={item.image} 
                alt={`Lavoro ${item.id}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}