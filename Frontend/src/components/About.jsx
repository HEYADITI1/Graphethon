import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/Particle";

import Particle from "./Particle";

function About(){
    return (
      <section id="about">
        <h1 className="lfh1">About Us</h1>
        <img src="C:\Users\hp\Downloads\Lost-And-Found-main\Reclaim4\Frontend\public\images\5984948_57314.jpg" alt="about-image" className="about-image" />
        <p className="about-desc">
        At ReclaimIt, we're dedicated to using technology to reunite lost items with their owners. 
        Our platform matches,saving time and increasing 
        successful reunions. But we're more than just a service; we're a supportive community where 
        individuals come together to help one another. Join us in our mission to make lost items a thing 
        of the past. Thank You for being the part of Reclaim it..
        <br />
        <br />
        <br />
        <br />
        <br />

        </p>
         <br />

        <h1 className="lfh1">Contact Us</h1>
        <p className="about-desc">
        Let's Help You Out ! We are there to help you.
        <br />
        <br />
        <br />
        <button style={{ backgroundColor: 'transparent', color: '#007bff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', border: '2px solid #ffc107', marginRight: '10px' }}>Email</button>
        <button style={{ backgroundColor: 'transparent', color: '#007bff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', border: '2px solid #ffc107', marginRight: '10px' }}>Phone</button>
        <button style={{ backgroundColor: 'transparent', color: '#007bff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', border: '2px solid #ffc107', marginRight: '10px' }}>Twitter</button>
        </p>
        <footer>
        <p>Copyright &copy; 2024  Designed and Built by <a href="https:">ANONYMOUS</a></p>
        </footer>
      </section>
      
    );
}
export default About;
export function Home() {
  return (
    <main>
      <Navbar />
      <div className="particle-container">
        <ParticlesBackground />
      </div>
      <div className="hero">
        <h1>RECLAIM IT <br /><span style={{ fontSize: '30px', color: 'white' }}>Where    Lost   meets   Found,  Seamlessly!</span> </h1>
        <a href="/find">
          <button>Let's Find Your Item</button>
        </a>
      </div>
      <About />
    </main>
  );
}
