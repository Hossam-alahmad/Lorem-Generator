import React, { useState } from "react";

const Form = ({ setNumber, data }) => {
    const [inputValue, setInputValue] = useState("");
    const submitHandler = e => {
        e.preventDefault();
        if (inputValue.trim()) {
            if (parseInt(inputValue) > data.length) setNumber(data.length);
            else if (parseInt(inputValue) <= 0) setNumber(0);
            else setNumber(inputValue);
        }
    };

    return (
        <form
            onSubmit={submitHandler}
            className="d-flex w-50 m-auto justify-content-center mb-4"
        >
            <input
                type="number"
                className="form-control ms-2"
                name="gen-number"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <input type="submit" className="btn btn-success" value="Generate" />
        </form>
    );
};

export default Form;
