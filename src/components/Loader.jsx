import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-content">

        <div className="logo-orbit">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-third"></div>
          <div className="loader-logo">
            <img src="/images/logo.png" alt="Chakrion Technologies" />
          </div>
        </div>

        <h2>CHAKRION <span>TECHNOLOGIES</span></h2>

        <p>Building Your Digital Experience</p>

        <div className="loading-line">
          <span></span>
        </div>

        <small>INITIALIZING EXPERIENCE...</small>

      </div>
    </div>
  );
}