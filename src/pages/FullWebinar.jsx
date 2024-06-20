import React from 'react';
import { useParams } from 'react-router-dom';
import { webinarData } from '../data/webinarData';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterComponent';
import ScrollToTop from '../components/scrollTop';
import { FaUser, FaCalendar } from 'react-icons/fa';

const FullWebinar = () => {
  const { id } = useParams();
  const webinar = webinarData.find((webinar) => webinar.id === parseInt(id));

  if (!webinar) {
    return <div>Webinar Tidak Ditemukan</div>;
  }

  // Memisahkan deskripsi berdasarkan tanda \n menjadi baris baru
  const descriptionLines = webinar.description.split('\n');

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="container mx-auto px-7">
        
        <div className="text-start">
          <h1 className="mt-10 font-bold text-3xl">{webinar.title}</h1>
          <div className="flex justify-center pb-5 gap-4 m-6"></div>
        </div>

        <div className="flex justify-center h-[500px] mt-20 bg-[#D9D9D95C]">
          <img src={webinar.image} alt="Webinar" className="w-auto h-[500px]" />
        </div>
        
        <div className="mb-10">
          {descriptionLines.map((line, index) => (
            <p key={index} className="mb-4 text-justify">{line}</p>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FullWebinar;