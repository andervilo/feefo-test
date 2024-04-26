import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './suport-contact.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function SuportContact({contact}) {
  return (
    <>
      <div className="SupportContactMain">
        <div className='SupportTitle'>YOUR FEEFO SUPORT CONTACT</div>
        <div className="SupportContact">
          <div className='SupportLogo'>S</div>
          <div className='SupportContactData'>
            <span className='Name'>{contact.name}</span>
            <div className='Email'>
              <div className='Icon'><FontAwesomeIcon icon={faEnvelope} /></div>
              <div className='TextEmail'>{contact.email}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
