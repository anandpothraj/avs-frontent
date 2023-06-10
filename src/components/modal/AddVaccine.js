import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const AddVaccine = (props) => {

    const [ minAge, setMinAge ] = useState("");
    const [ timeGap, setTimeGap ] = useState("");
    const [ noOfDose, setNoOfDose ] = useState("");
    const [ vaccineName, setVaccineName ] = useState("");

    const resetFields = () => {
        setMinAge("");
        setTimeGap("");
        setNoOfDose("");
        setVaccineName("");   
    }

    const addVaccine = () => {
        console.log(minAge, timeGap, noOfDose, vaccineName);
    };

    return (
        <Modal {...props}size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor="vaccineName">Enter Vaccine Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Vaccine Name"
                            name="vaccineName"
                            onChange={(e) => setVaccineName(e.target.value)}
                            value={vaccineName}
                        />
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label htmlFor="noOfDose" className="form-label">No of Dose</Form.Label>
                        <select className="form-select" 
                            name="noOfDose"
                            type="number"
                            onChange={(e) => setNoOfDose(e.target.value)}
                            value={noOfDose}
                        >
                            <option value={""}>--select--</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label  htmlFor="timeGap" className="form-label">Time interval between each doses</Form.Label>
                            <select className="form-select"  
                                name="timeGap" 
                                type="text"
                                value={timeGap}
                                onChange={(e) => setTimeGap(e.target.value)}
                            >
                                <option value={""}>--select--</option>
                                <option>30 days</option>
                                <option>60 days</option>
                                <option>90 days</option>
                            </select>
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <Form.Label htmlFor="minAge" >Minimum age required</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Minimum required"
                            name="minAge"
                            onChange={(e) => setMinAge(e.target.value)}
                            value={minAge}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" className="m-2" onClick={addVaccine}>Add Vaccine</Button>
                <Button className="m-2" variant="warning" onClick={resetFields}>Reset Feilds</Button>
                <Button variant='danger' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddVaccine;