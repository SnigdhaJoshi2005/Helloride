import { useState } from "react";

const fields = [
    { label: "First Name", name: "firstName", type: "text" },
    { label: "Last Name", name: "lastName", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Phone Number", name: "phone", type: "tel" },
];

const serviceOptions = [
    { value: "bike_rides", label: "Bike Rides" },
    { value: "car_rides", label: "Car Rides" },
    { value: "parcel", label: "Parcel" },
    { value: "food", label: "Food" },
];

function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Application submitted! We'll be in touch soon.");
    };

    return (
        <div className="earn-form-stack">
            <h2 className="earn-form-heading">Join our community</h2>

            <form className="earn-form" onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <label key={field.name}>
                        {field.label}
                        <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            required
                        />
                    </label>
                ))}

                <label className="service-label">
                    Choose Your Service
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a service</option>
                        {serviceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>

                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
}

export default Form;
