import React, { useState, useEffect } from 'react';
import './style.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import bankPoint from './img/bankPoint.svg';
import consultantPoint from './img/consultantPoint.svg';

import { db } from './../../db';

export const MapBox = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 48.9747357,
    longitude: 14.474285,
    zoom: 7,
  });
  /*
  const bodZajmu = {
    nazev: 'Náměstí České Budějovice',
    latitude: 48.974643727964256,
    longitude: 14.473364057153596,
  };*/

  const [persons, setPersons] = useState([]);
  useEffect(() => {
    const nahrajOsobu = db
      .collection('poradci')
      .where('allowed', '==', true)
      .onSnapshot((snaptshot) => {
        // Tady jsme dostali data
        const dokumenty = snaptshot.docs;
        const dataPerson = dokumenty.map((dokument) => {
          const data = dokument.data();
          data.id = dokument.id;
          data.ikonka = data.select === 'poradce' ? consultantPoint : bankPoint;

          console.log(data);
          return data;
        });
        setPersons(dataPerson);
      });
    return nahrajOsobu;
  }, []);

  /*
  const persons = [
    {
      id: 1,
      nazev: 'Eva ',
      latitude: 48.974598,
      longitude: 14.479637,
      typ: 'Bankéř/ka',
      ikonka: bankPoint,
    },
    {
      id: 2,
      nazev: 'Šárka',
      latitude: 48.815727,
      longitude: 14.314896,
      typ: 'Bankéř/ka',
      ikonka: bankPoint,
    },
    {
      id: 3,
      nazev: 'Léni paní',
      latitude: 49.316744,
      longitude: 14.245258,
      typ: 'Finanční poradce/poradkyně',
      ikonka: consultantPoint,
    },
    {
      id: 4,
      nazev: 'CK',
      latitude: 48.8193497,
      longitude: 14.31946,
      typ: 'Finanční poradce/poradkyně',
      ikonka: consultantPoint,
    },
  ];*/
  const [otevrenyPopup, setOtevrenyPopup] = useState(null);

  const [filtr, setFiltr] = useState('Vše');

  return (
    <>
      <ReactMapGL
        {...viewport}
        onViewportChange={(novyViewport) => setViewport(novyViewport)}
        width="100%"
        height={400}
        mapStyle={{
          version: 8,
          sources: {
            'raster-tiles': {
              type: 'raster',
              tiles: ['https://mapserver.mapy.cz/base-m/{z}-{x}-{y}'],
              tileSize: 256,
              attribution:
                'Mapové podklady od <a target="_top" rel="noopener" href="https://mapy.cz/">Seznam.cz</a> a <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>.',
            },
          },
          layers: [
            {
              id: 'simple-tiles',
              type: 'raster',
              source: 'raster-tiles',
              minzoom: 0,
              maxzoom: 20,
            },
          ],
        }}
      >
        {persons
          .filter((data) => {
            if (filtr === 'Vše') {
              return true;
            }
            if (filtr === data.select) {
              return true;
            }
            return false;
          })
          .map((data) => (
            <React.Fragment key={data.id}>
              <Marker
                latitude={data.latitude}
                longitude={data.longitude}
                offsetLeft={-25}
                offsetTop={-50}
              >
                <div
                  onClick={() => {
                    setOtevrenyPopup(data.id);
                  }}
                  className="mapa__marker"
                >
                  <img
                    onClick={props.viewPerson.bind(null, data)}
                    src={data.ikonka}
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
              </Marker>
              {otevrenyPopup === data.id ? (
                <Popup
                  offsetTop={-60}
                  latitude={data.latitude}
                  longitude={data.longitude}
                  onClose={() => {
                    setOtevrenyPopup(null);
                  }}
                >
                  <h2>{data.name}</h2>
                  <p>{data.select}</p>
                  <p>{data.email}</p>
                  <p>Více pod mapou</p>
                </Popup>
              ) : null}
            </React.Fragment>
          ))}
      </ReactMapGL>
      <div className="margin"></div>
      <div className="container__map">
        <label className="mapa__filter important-text">
          Zobrazit v mapě:
          <select
            value={filtr}
            onChange={(event) => setFiltr(event.target.value)}
          >
            <option>Vše</option>
            <option>bankéř</option>
            <option>poradce</option>
          </select>
        </label>
        <div className="container__map-icons">
          <div className="map-icons">
            <img src={bankPoint} alt="Ikona pracovníka banky" />
            <p>Bankéř</p>
          </div>
          <div className="map-icons">
            <img src={consultantPoint} alt="Ikona finačního poradce" />
            <p>Poradce</p>
          </div>
        </div>
      </div>
    </>
  );
};
