import React, { useEffect } from 'react';

const DropDown = ({ label, dependsOn, name, options, ifOtherThenSpecify, responsibleForRendering, formData, setFormData }) => {
    useEffect(() => {
        // Set the default value to the first option in the list if it's not already set
        if (!formData[name] && options.length > 0) {
            setFormData((prevData) => ({
                ...prevData,
                [name]: options[0] // Set the default value to the first option
            }));
        }
    }, [formData, name, options, setFormData]);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <div className="dropdownContainer isWide">
            <label>{label}</label>
            <select
                name={name}
                onChange={handleChange}
                value={formData[name] || options[0]} // Set value to the first option by default
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {ifOtherThenSpecify && formData[name] === "Other" && (
                <input
                    type="text"
                    placeholder="Please specify"
                    name={`${name}Other`}
                    onChange={handleChange}
                    value={formData[`${name}Other`] || ''}
                />
            )}
        </div>
    );
}

export default DropDown;
