import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { redirectUser } from '../../utils/redirectUser';

const DoctorScreen = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const accountType = redirectUser();
    navigate(`/${accountType}`);
    // eslint-disable-next-line
  },[]);

  return (
    <div>DoctorScreen</div>
  )
}

export default DoctorScreen