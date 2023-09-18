import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { TbVaccine } from 'react-icons/tb';
import { HiDownload } from 'react-icons/hi';
import { GiOverdose } from 'react-icons/gi';
import { GrPowerReset } from 'react-icons/gr';
import { FaUserShield } from 'react-icons/fa';
import { Button, Spinner } from "react-bootstrap";
import { BsShieldFillExclamation, BsFillShieldLockFill } from 'react-icons/bs';

const FetchVaccinationStatus = (props) => {

  const { vaccinations, vaccinationFilter, setVaccinationFilter, fetchVaccinations,loading } = props;

  return (
    <div className="my-2">
      <div className="d-flex flex-row overflow-auto">
          <h5 className="d-inline-block">Vaccination status</h5>
          <select className="mx-2 text-capitalize rounded bg-light text-white px-1"  name="vaccinationfilter" value={vaccinationFilter} onChange={(e)=>setVaccinationFilter(e.target.value)} required>
              <option>all</option>
              <option>fully vaccinated</option>
              <option>partially vaccinated</option>
          </select>
          <Button size='sm' className='mx-2' variant='warning' onClick={()=>{fetchVaccinations();setVaccinationFilter("all")}}><GrPowerReset/></Button>
      </div>
      <hr />
      <div className='d-flex flex-column'>
        {
          loading ? <div className="d-flex align-items-center"><Spinner as="span"/><span className='mx-3'>Fetching Vaccinations...</span></div> : 
          vaccinations && vaccinations.length > 0 ? vaccinations.map((vaccination, index) => {

            const { vaccineName, doseNo, fullyVaccinated } = vaccination;
              return (
                  <div key={index} variant='light' className='border-bottom border-light p-2 d-flex align-items-center overflow-auto justify-content-start justify-content-lg-around'>
                      <span className='mx-2 text-success' >
                          <TbVaccine className='mx-2' />{vaccineName}
                      </span>
                      <span className='mx-2 text-warning'>
                          <GiOverdose className='mx-2' />{doseNo}
                      </span>
                      <span className={`mx-2 ${fullyVaccinated?"text-success" : "text-danger"}`}>
                          {fullyVaccinated ? <><FaUserShield className='mx-1'/> Fully Vaccinated <BsFillShieldLockFill className='mx-1'/></>  : <><BsShieldFillExclamation className='mx-2'/> Partially Vaccinated</>}
                      </span>
                      <span className='mx-2'>
                          <Button size='sm' variant='info'><AiFillEye className='mx-2'/>Preview</Button>
                      </span>
                      <span className='mx-2'>
                          <Button size='sm' variant='warning'><HiDownload className='mx-2'/>PDF</Button>
                      </span>
                  </div>
              ) 
          }) : `No ${vaccinationFilter === "all" ? "" : vaccinationFilter } vaccination status found!`
        }
      </div>
    </div>
  )
}

export default FetchVaccinationStatus