import React from "react";
import ContactForm from "./ContactForm";

export default function ContactPage() {
    return (
        <section className="contact nav-container">
            <h2>Contact us</h2>
            <p>
                We are here to answer any question you may have about our
                website. reach out to us and we'll respond as soon as we can.
            </p>
            <ContactForm />
        </section>
    );
}
