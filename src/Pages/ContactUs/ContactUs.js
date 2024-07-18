import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useTranslation } from 'react-i18next';

const mapStyles = {        
  height: "400px",
  width: "100%"
};

const defaultCenter = {
  lat: 41.3851, lng: 2.1734
}

const ContactUs = ({ language }) => {
  const {t} = useTranslation()
  

  return (
    <div className="p-8 ">
      <h1 className="text-3xl font-bold mb-6">اتصل بنا'</h1>
      <p className="mb-6">
        {t("Contact title")}
      </p>
      <LoadScript googleMapsApiKey='AIzaSyCG-vpSFjIacwUtgYeyXnnPVft9U7VlsRU'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          <Marker position={defaultCenter}/>
        </GoogleMap>
      </LoadScript>
      <form action="https://formspree.io/f/mustafa.orapi@gmail.com" method="POST" className="mt-6">
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">
            {t("Contact form name")}
          </label>
          <input type="text" id="name" name="name" required className="w-full rounded-xl bg-light-primary dark:bg-dark-primary p-2 border border-gray-300"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="address">
            {t("Contact form address")}
          </label>
          <input type="text" id="address" name="address" required className="w-full rounded-xl bg-light-primary dark:bg-dark-primary p-2 border border-gray-300"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">
            {t("Contact form email")}
          </label>
          <input type="email" id="email" name="email" required className="w-full rounded-xl bg-light-primary dark:bg-dark-primary p-2 border border-gray-300"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="message">
            {t("Contact form message")}
          </label>
          <textarea id="message" name="message" rows="4" required className="w-full rounded-xl bg-light-primary dark:bg-dark-primary p-2 border border-gray-300"></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 rounded-lg text-white">
          {t("Contact form send")}
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
