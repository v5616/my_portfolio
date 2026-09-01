import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Engineer</h4>
                <h5>ROWTH Autos · Chandigarh</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Refactored 20+ reusable UI components with React.js, Redux, and
              TypeScript, and built RESTful APIs while resolving high-severity
              issues to maintain 99.9% uptime. Collaborated cross-functionally to
              ship 20+ production releases on two-week cycles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Engineer</h4>
                <h5>Pragmatic Play · Noida</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Engineered real-time multiplayer casino games using React.js,
              Socket.io, and WebSockets for thousands of concurrent users, lifting
              engagement by 40%. Built 30+ Storybook components (25% faster
              delivery) and shipped WCAG-accessible UIs across three game titles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Applied Materials · Bengaluru</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architected three production applications end-to-end with React,
              Next.js, GraphQL, and FastAPI, taking them from requirements to 200+
              users at 99.9% uptime. Built AI dashboards that cut data load time by
              30%, mentored five engineers on full-stack practices, and drove CI/CD
              improvements reducing deployment time by 25%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
