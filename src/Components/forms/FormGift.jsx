import { useState, forwardRef, useImperativeHandle } from "react";
import { Form } from "react-bootstrap";


const FormGift = forwardRef((prop, ref) => {
    const [formData, setFormData] = useState({
    name: "",
    color: "",
    recipient: "",
    location: "",
    suggestion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    useImperativeHandle(ref, () => ({
      getFormData: () => formData,
    }));
  return (
    <Form>
      {/* name */}
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Color */}
      <Form.Group controlId="color" className="mb-3">
        <Form.Label>Color</Form.Label>
        <Form.Control
          type="text"
          placeholder="Gift pack color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Recipient */}
      <Form.Group controlId="recipient" className="mb-3">
        <Form.Label>Recipient</Form.Label>
        <Form.Select
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
        >
          <option value="">-- Select --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Select>
      </Form.Group>

      {/* Location */}
      <Form.Group controlId="location" className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Select
          name="location"
          value={formData.location}
          onChange={handleChange}
        >
          <option value="">-- Select --</option>
          <option>Abk, Ogun State</option>
          <option>Sagamu, Ogun State</option>
          <option>Ijebu-Ode, Ogun State</option>
          <option>Ijebu-igbo, Ogun State</option>
          <option>Ibadan, Oyo State</option>
          <option>Ikeja, Lagos State</option>
          <option>Lekki, Lagos State</option>
          <option>Other</option>
        </Form.Select>
      </Form.Group>

      {/* Suggestion */}
      <Form.Group controlId="suggestion" className="mb-3">
        <Form.Label>Suggestion</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="What do you want to add to the giftbox?"
          name="suggestion"
          value={formData.suggestion}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
})

FormGift.displayName = 'FormGift';

export default FormGift;