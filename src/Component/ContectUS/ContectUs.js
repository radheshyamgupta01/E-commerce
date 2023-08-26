import React, { useState } from "react";
import "./ContactUs.css";


export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://e-commerse-23b6e-default-rtdb.firebaseio.com/projectA.json", {
                method: "POST",
                body: JSON.stringify({
                    name:name,
                    email:email,

                    phoneNumber:phoneNumber
                }),
                headers: {
                    "Content-Type": "application-json"
                }
            })
            if (res.ok) {
                alert("data saved successfully")
                setName("");
                setEmail("");
                setPhoneNumber("");
            }
            else {
                alert("something went wrong")
            }


        }

        catch (error) {
            alert(error)
        }


    };

    return (
        <div className="contact">
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
