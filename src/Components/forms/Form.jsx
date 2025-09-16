import { useState, forwardRef, useImperativeHandle } from "react";
import { Form } from "react-bootstrap";

const Forms = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    inscription: "",
    phone: "",
    location: "",
  });

  const locations = [
    "Abk, Ogun State",
    "Sagamu, Ogun State",
    "Ijebu-Ode, Ogun State",
    "Ijebu-igbo. Ogun State",
    "Ibadan, Oyo State",
    "Ikeja, Lagos State",
    "Lekki, Lagos State",
    "Other",
  ];



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
      <Form.Group className="mb-3" controlId="formColor">
        <Form.Label>Color</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter preferred color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Inscription */}
      <Form.Group className="mb-3" controlId="formInscription">
        <Form.Label>Inscription</Form.Label>
        <Form.Control
          type="text"
          placeholder="What do you want written on it?"
          name="inscription"
          value={formData.inscription}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Phone */}
      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Phone No</Form.Label>
        <Form.Control
          type="tel"
          placeholder="We want to reach out to you"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Location */}
      <Form.Group className="mb-3" controlId="formLocation">
        <Form.Label>Location</Form.Label>
        <Form.Select
          name="location"
          value={formData.location}
          onChange={handleChange}
        >
          <option value="">Select Location</option>
          {locations.map((loc, idx) => (
            <option key={idx} value={loc}>
              {loc}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
});

// ✅ Fix the ESLint warning:
Forms.displayName = "Forms";

export default Forms;
