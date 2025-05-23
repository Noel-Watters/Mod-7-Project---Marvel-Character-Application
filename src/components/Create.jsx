//Create character component
//Provides an example of the character card
//This should add a new character to the database
// The Alignment should be a radio button with the options of Hero, Villain
//Name, alias, and radio button should be required fields
//the Image url should have a background image of the character
//The powers should allow mutiple powers seperated by a comma and explains that the powers should be seperated by a comma
//The submit button should be a primary button and the cancel button should be a secondary button

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert'; 
import Spinner from 'react-bootstrap/Spinner';

function Create() {
  const navigate = useNavigate(); // For navigation after submission
  const [character, setCharacter] = useState(null); // Store character data
  const [formData, setFormData] = useState({
    name: '',
    alias: '',
    alignment: '',
    powers: '',
    image_url: '',
  });
  const [showAlert, setShowAlert] = useState(false); // State for alert visibility
  const [alertMessage, setAlertMessage] = useState(''); // State for alert message
  const [alertVariant, setAlertVariant] = useState('success'); // State for alert type (success or danger)
  const [validated, setValidated] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fetch the character details when the component mounts
  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/characters/1`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.error('Error fetching character:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.alias || !formData.alignment) {
        setValidated(true); // Set the form as validated
      return;
    }
    axios.post('http://127.0.0.1:5000/characters', formData)
      .then(() => {
        setAlertMessage('Character created successfully!');
        setAlertVariant('success');
        setShowAlert(true); // Show success alert
        setTimeout(() => {
          setShowAlert(false); // Hide alert after 3 seconds
          navigate('/characters'); // Redirect to the characters list
        }, 3000);
      })
      .catch((error) => {
        setAlertMessage(`Error creating character: ${error.message}`);
        setAlertVariant('danger');
        setShowAlert(true); // Show error alert
        setTimeout(() => setShowAlert(false), 5000); // Hide alert after 5 seconds
      });
  };

  // Handle cancel button
  const handleCancel = () => {
    navigate('/characters'); // Redirect to the characters list
  };

  if (!character) {
    return (        
    <h3>
    <Spinner // Spinner - shows an animation that tells the user something is being loaded
      animation="border"
      variant="info"
      style={{ marginRight: '15px' }}
      role="status"
    />
    Loading Users...
  </h3>
    );
  }

  return (
    <Container>

      <h3>Create Character</h3>
            <Card style={{ width: '18rem', cursor: 'pointer' }}>
              <Card.Img variant="top" src={character.image_url || 'https://www.shutterstock.com/image-vector/gender-neutral-profile-avatar-front-260nw-1994872016.jpg'} alt={character.name} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Alias: {character.alias}</Card.Subtitle>
                <div className='mt-2'>
                  <strong>Powers:</strong>
                  <ul>
                    {character.powers.split(',').map((power, index) => (
                      <li key={index}>{power.trim()}</li>
                    ))}
                  </ul>
                </div>
                <Card.Text>Alignment: {character.alignment}</Card.Text>
              </Card.Body>
            </Card>

            {showAlert && (
             <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
             {alertMessage}
            </Alert>
        )}

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>*Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            isInvalid={!formData.name && validated} // Show validation error if name is empty and form is validated
          />
        <Form.Control.Feedback type="invalid">
            Please provide a valid name.
        </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>*Alias</Form.Label>
          <Form.Control
            type="text"
            name="alias"
            value={formData.alias}
            onChange={handleChange}
            required
            isInvalid={!formData.alias && validated} // Show validation error if alias is empty and form is validated
          />
        <Form.Control.Feedback type="invalid">
            Please provide a valid alias.
        </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>*Alignment</Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              label="Hero"
              name="alignment"
              value="hero"
              checked={formData.alignment === 'hero'}
              onChange={handleChange}
              required
              isInvalid={validated && !formData.alignment} // Show invalid feedback if not selected
            />
            <Form.Check
              inline
              type="radio"
              label="Villain"
              name="alignment"
              value="villain"
              checked={formData.alignment === 'villain'}
              onChange={handleChange}
              required
              isInvalid={validated && !formData.alignment} // Show invalid feedback if not selected
            />
            {validated && !formData.alignment && (
              <div className="invalid-feedback d-block">
                Alignment is required.
              </div>
            )}
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Powers (comma-separated)</Form.Label>
          <Form.Control
            type="text"
            name="powers"
            value={formData.powers}
            onChange={handleChange}
            placeholder="e.g., Super strength, Flight, Invisibility"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="me-2">
          Submit
        </Button>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
}

export default Create;