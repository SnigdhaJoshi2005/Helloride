import { useEffect, useRef, useState } from "react";
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
    const [isMobileServiceSelect, setIsMobileServiceSelect] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    service: ""
});

    const menuRef = useRef(null);
    const triggerRef = useRef(null);
    const isOpenRef = useRef(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 560px)");
        const updateMobileSelect = () => setIsMobileServiceSelect(mediaQuery.matches);

        updateMobileSelect();
        mediaQuery.addEventListener("change", updateMobileSelect);

        return () => mediaQuery.removeEventListener("change", updateMobileSelect);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const selectedService = serviceOptions.find((option) => option.value === formData.service);

    const toggleMenu = () => {
        const next = !isOpenRef.current;
        isOpenRef.current = next;
        if (menuRef.current) {
            menuRef.current.classList.toggle("is-open", next);
        }
        if (triggerRef.current) {
            triggerRef.current.setAttribute("aria-expanded", next);
        }
    };

    const openMenu = () => {
        if (!isOpenRef.current) {
            toggleMenu();
        }
    };

    const closeMenu = () => {
        if (isOpenRef.current) {
            toggleMenu();
        }
    };

    const handleTriggerClick = () => {
        toggleMenu();
    };

    const handleServiceSelect = (option) => {
        setFormData({
            ...formData,
            service: option.value,
        });
        closeMenu();
        if (triggerRef.current) {
            triggerRef.current.focus();
        }
    };

    const handleBlur = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            closeMenu();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.service) {
            alert("Please choose a service.");
            return;
        }

        emailjs
            .send(
                "service_helloride",
                "template_hmtzwcu",
                formData,
                "QZPiTVuMVhPtcMBZ5"
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
                        className="desktop-service-select"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required={!isMobileServiceSelect}
                        disabled={isMobileServiceSelect}
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
                    <div
                        className="mobile-service-select"
                        onFocus={openMenu}
                        onBlur={handleBlur}
                    >
                        <button
                            type="button"
                            ref={triggerRef}
                            className="mobile-service-trigger"
                            aria-haspopup="listbox"
                            aria-expanded={false}
                            onClick={handleTriggerClick}
                        >
                            {selectedService ? selectedService.label : "Select a service"}
                        </button>
                        <ul ref={menuRef} className="mobile-service-menu" role="listbox">
                            {serviceOptions.map((option) => (
                                <li key={option.value} role="option" aria-selected={formData.service === option.value}>
                                    <button type="button" onClick={() => handleServiceSelect(option)}>
                                        {option.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </label>

                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
}

export default Form;
