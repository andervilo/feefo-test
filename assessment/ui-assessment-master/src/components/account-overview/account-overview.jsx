import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';

import './account-overview.css';
import { Title } from '../title/title';
import { SuportContact } from '../suport-contact/suport-contact';
import { Sales } from '../sales/sales';

export const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <div className="AccountOverview">
      <div className='Main'>
        <div className='TitleSupport'>
          <div className='TitleFlex'><Title title={"Account Overview"}/></div>
          <div className='ContactSupport'><SuportContact contact={data.supportContact}/></div>
        </div>
        <div className='SalesOverview'>
          <div >
            <Sales data={data.salesOverview}/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AccountOverview;