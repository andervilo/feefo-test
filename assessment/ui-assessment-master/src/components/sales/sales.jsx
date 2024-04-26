import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import  './sales.css';


export function Sales({data}) {
  return (
    <>
      <div className='Sales'>
        <div className='Icons'>
          <div className='Right'>
            <div className='UpLoadIcon'><FontAwesomeIcon icon={faUpload}/></div>
            <div ><span className='SalesText'>Sales</span></div>
          </div>
          <div className='Left'>
            <div className='InfoIcon'><FontAwesomeIcon icon={faInfoCircle}/></div>
          </div>
        </div>

        <div className='InfoText'>
          <span>You had {data.uploads} <strong>uploads</strong> and {data.linesAttempted} lines added.</span>
        </div>
        
      </div>

      <div className='Dashboard'>
        <div className='DashboardRight'>
          <div className='Number'>
            <span>{(data.successfulUploads/data.uploads)*100}%</span>
          </div>
          <div className='DashboardText'><span>UPLOADS SUCCESS</span></div>
        </div>
        <div className='DashboardLeft'>
          <div className='Number'>
            <span>{(data.linesSaved/data.linesAttempted)*100}%</span>
          </div>
          <div className='DashboardText'><span>LINES SAVED</span></div>
        </div>
      </div>
    </>
  );
}
