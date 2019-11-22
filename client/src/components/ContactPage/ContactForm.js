import React from "react";

/* == CREATING  STATELSS REACT COMPONENT FOR THE CONTACT FORM ====== */

export default function ContactForm() {
    return (
        <form className="contact-form" action="#">
            <div className="contact-names">
                <label htmlFor="firstName">First Name </label>

                <input
                    type="text"
                    name="FirstName"
                    id="firstName"
                    placeholder="First Name"
                    required
                />

                <label htmlFor="LastName">Last Name </label>

                <input
                    type="text"
                    name="LastName"
                    id="LastName"
                    placeholder="Last Name"
                    required
                />
            </div>
            <div className="contact-email">
                <label htmlFor="email"> Email Address </label>

                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                />
            </div>

            <div className="contact-phone">
                <label htmlFor="phone">Phone Number</label>

                <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                />
            </div>

            <div className="contact-comment">
                <label htmlFor="comment">Comment </label>
                <textarea id="comment" required />
            </div>

            <button className="contact-button" type="submit" name="submit">
                SUBMIT
            </button>
        </form>
    );
}
