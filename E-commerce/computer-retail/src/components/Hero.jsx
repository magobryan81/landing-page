import Navbar from "./Navbar.jsx"
import '../css/Hero.css';
import heroImg from '../assets/hero-img.png';

export default function Hero() {
    return(
        <>
            <Navbar/>
            <section className="hero-section">
                <div className="section-content">
                    <div className="text-content">
                        <div className="headline-subheadline">
                            <h1>Power Up Your Digital World</h1>
                            <p>Find the perfect PC, laptop, or custom build tailored to your needs—whether you're gaming, working, or creating.</p>
                        </div>
                        <div className="cta-buttons">
                            <button className="shop-button">Shop Now</button>
                            <button className="build-button">Build Your PC</button>
                        </div>
                    </div>
                    <div className="image-content">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </section>

        </>
    )
}