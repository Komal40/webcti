import React from 'react';
import './CertificateSection.css';
import ce from '../Images/ce.jpg';
import iso from '../Images/iso.jpg';
import rohs from '../Images/rohs.jpg';
import pan from '../Images/pancard.png';
import bronze from '../Images/Bronze.pdf';
import gst from '../Images/gst.pdf';
import iec from '../Images/iec.pdf';
import ic from '../Images/incorporation_certificate.pdf';
import msme from '../Images/msme.pdf';
import startup from '../Images/startup.pdf';
import trademark from '../Images/trademark.pdf';


const certificates = [
  // { file: ce, type: 'image', alt: 'CE Certificate', fileName: 'ce_certificate.jpg' },
  // { file: iso, type: 'image', alt: 'ISO Certificate', fileName: 'iso_certificate.jpg' },
  // { file: rohs, type: 'image', alt: 'ROHS Certificate', fileName: 'rohs_certificate.jpg' },
  { file: pan, type: 'image', alt: 'PAN Certificate', fileName: 'pan.jpg' },
  { file: bronze, type: 'pdf', alt: 'MSME Bronze Certificate', fileName: 'Bronze.pdf' },
  { file: gst, type: 'pdf', alt: 'GST Certificate', fileName: 'gst.pdf' },
  { file: iec, type: 'pdf', alt: 'IEC Certificate', fileName: 'iec.pdf' },
  { file: ic, type: 'pdf', alt: 'Incorporation Certificate', fileName: 'incorporation_certificate.pdf' },
  { file: msme, type: 'pdf', alt: 'MSME Certificate', fileName: 'msme.pdf' },
  { file: startup, type: 'pdf', alt: 'Startup Certificate', fileName: 'startup.pdf' },
  { file: trademark, type: 'pdf', alt: 'Trademark Certificate', fileName: 'trademark.pdf' },
  // Add more certificates as needed
];


export default function CertificateSection() {
  const openFileInNewTab = (file) => {
    window.open(file.file, '_blank');
  };

  const downloadFile = (file) => {
    const link = document.createElement('a');
    link.href = file.file;
    link.download = file.fileName;
    link.click();
  };


  return (
    <div className="certificate_section">
      {certificates.map((certificate, index) => (
        <div key={index} className='certificate_images'>
          {certificate.type === 'image' ? (
            <>
            <h5>{certificate.alt}</h5>
            <img src={certificate.file} alt={certificate.alt} />
            </>
          ) : (
            <div className='pdf_section'>
              {/* <span>PDF</span> */}
              <span>{certificate.alt}</span>
            </div>
          )}
          <button onClick={() => openFileInNewTab(certificate)}>View</button>
          <button onClick={() => downloadFile(certificate)}>Download</button>
        </div>
      ))}

      
    </div>
  );
}

