import { useState, useMemo, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.scss';
import { divIcon, Icon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import FindMe from './FindMe';
import Posses from './Posses';

const LeafletMap = () => {
  // Steps ⤵

  // 1. npm install react-leaflet
  // 2. Mapcontainer and center(your location) --zoom(level)
  // 3. attribution - map provider url (from website https://react-leaflet.js.org/docs/start-setup/ )
  // 4. url - url from site
  // 5. reason of its to be piece of piece is beacuse we import it
  // 6. solve it we need upload css on line 3 and after that map will downloaded but not seenm because unknowingly reason it sets its height to 0 and we need change "className we defined" height to make map appear
  // 7. For custom icon need 'npm install leaflet' and its properties on customPopUpIcon "new Icon from leaflet" (https://www.flaticon.com/free-icon/placeholder_684908?term=location&page=1&position=7&origin=search&related_id=684908 is great website for icons)
  // 8. "npm i react-leaflet-cluster" properties got in customClusterIcon // to make different points get together as combionation
  // 9. import MarkerClusterGroup from 'react-leaflet-cluster'; to change its style we need change "className leaflet-div-icon"
  // 10. if we want we can change the TileLayer of map skin from website https://leaflet-extras.github.io/leaflet-providers/preview/ and change any map we want TileLayer url

  const customPopUpIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/5836/5836608.png',
    iconSize: [45, 45],
  });

  const homePopUpIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2163/2163350.png',
    iconSize: [45, 45],
  });

  const locationsOfDifferentAreas = [
    {
      geocode: [40.3893897, 49.8035473],
      popUp: 'Hi I live here',
      icon: homePopUpIcon,
    },
    {
      geocode: [40.3595, 49.8266],
      popUp: "It's flame Towers",
      icon: customPopUpIcon,
    },
    {
      geocode: [40.3959, 49.8678],
      popUp: "It's Heydar Aliyev museum",
      icon: customPopUpIcon,
    },
  ];

  const customClusterIcon = cluster => {
    return new divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      // for getting numbers inside of this we must write ⤴

      className: 'cluster-icon',
      iconSize: point(33, 33, true),
    });
  };

  //   const [map, setMap] = useState(null);

  //   const displayMap = useMemo(
  //     () => (
  //       // center is where your map will focus, zoom (level), scrollwheelzom true
  //       <MapContainer
  //         center={[51.505, -0.09]}
  //         zoom={18}
  //         scrollWheelZoom={false}
  //         ref={setMap}
  //         keyboard={true} // + - zoom ➡ ⬅
  //         touchZoom={true} // with phone
  //       >
  //         <TileLayer
  //           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //           url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
  //           maxZoom={18}
  //         />
  //         <MarkerClusterGroup
  //           chunkedLoading
  //           iconCreateFunction={customClusterIcon}
  //         >
  //           {locationsOfDifferentAreas.map(({ geocode, popUp, icon }, key) => {
  //             return (
  //               <Marker
  //                 position={geocode}
  //                 key={key}
  //                 icon={icon}
  //                 eventHandlers={{
  //                   mouseover: event => event.target.openPopup(),
  //                   mouseout: event => event.target.closePopup(),
  //                 }} // for hover showing up
  //                 opacity={0.6}
  //               >
  //                 <Popup autoClose={true}>
  //                   <h4>{popUp}</h4>
  //                 </Popup>
  //               </Marker>
  //             );
  //           })}

  //           <FindMe icon={customPopUpIcon} />
  //         </MarkerClusterGroup>
  //       </MapContainer>
  //     ),
  //     []
  //   );

  //   return (
  //     <div>
  //       {map ? <Posses map={map} /> : null}
  //       {displayMap}
  //     </div>
  //   );
  // };

  const [find, setFind] = useState(false);
  const [poss, setPoss] = useState(null);

  console.log(find);

  useEffect(() => {
    console.log(find);
  }, [find]);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        //You have your locaton here

        setPoss([pos.coords.latitude, pos.coords.longitude]);
      });
      setFind(true);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  console.log(poss);

  return (
    <>
      <button type="button" onClick={() => setFind(prev => !prev)}>
        FInd me
      </button>
      <button onClick={getLocation}>Get Location</button>

      <MapContainer
        center={[40.3800064, 49.8008064]}
        zoom={18}
        closePopupOnClick={true}
        keyboard={true}
        touchZoom={true}
        // doubleClickZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={18}
        />
        <MarkerClusterGroup
          chunkedLoading //for performance downloading them one by one
          iconCreateFunction={customClusterIcon} // cluster icon
        >
          {locationsOfDifferentAreas.map(({ geocode, popUp, icon }, key) => (
            // Marker gets position, icon attrbitutes
            <Marker
              position={geocode}
              key={key}
              icon={icon}
              eventHandlers={{
                mouseover: event => event.target.openPopup(),
                mouseout: event => event.target.closePopup(),
              }} // for hover showing up
              opacity={0.8}
            >
              {/* It's for when we click && hover to show some message */}
              <Popup autoClose={true}>
                <h4>{popUp}</h4>
              </Popup>
            </Marker>
          ))}

          {find && <FindMe icon={customPopUpIcon} log="log" />}
          {/* <FindMe icon={customPopUpIcon} /> */}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};

export default LeafletMap;
