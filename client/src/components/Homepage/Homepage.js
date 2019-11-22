import React from "react";
import HomepageSlider from "./HomepageSlider";

export default function Homepage() {
    return (
        <section>
            {/* THE HOMEPAGE IMAGES SLIDER COMPONENT */}

            <HomepageSlider />

            <article className="home nav-container">
                <h1>RIVIERA</h1>

                <h2> Designed for your comfort</h2>

                <p>
                    Home is where love resides.memories are created. friends are
                    always welcome and family is forever.Furnish your life
                </p>

                <p>
                    natural textures, neutral tones, and nature inspired. here
                    comes the sunshine, explore new styles shops for the season.
                    from exposed wood and weathered metal to wicker and rattan.
                    your summer staycation starts here.
                </p>

                <div className="home-Image">
                    <img
                        src="https://s7d4.scene7.com/is/image/roomandboard/SF_Sustain_A0319_2?size=1168,720&scl=1"
                        alt="furniture"
                    />
                </div>
            </article>
        </section>
    );
}
