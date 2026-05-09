import { useState } from "react";
import emailjs from "@emailjs/browser";

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
    service: ""
});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_helloride",   // replace
                "template_hmtzwcu",  // replace
                formData,
                "QZPiTVuMVhPtcMBZ5"    // replace
            )
            .then(() => {
                alert("Application submitted! We'll be in touch soon.");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    service: "",
});
            })
            .catch((error) => {
                console.error("FULL ERROR:", error);
                alert(error.text || "Failed to send application.");
});
    };

    return (
        <div className="earn-form-stack">
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
                        <option value="" disabled>
                            Select a service
                        </option>
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