import "./styles/About.css";

const stats = [
  { value: "5+", label: "Years building for the web" },
  { value: "200+", label: "Users on systems shipped end-to-end" },
  { value: "99.9%", label: "Uptime across production platforms" },
  { value: "30%", label: "Faster data loads on AI dashboards" },
];

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Full-stack engineer specializing in performance-critical React and Next.js
          frontends and Python backends. Over five years I've shipped AI-powered
          dashboards that cut data load times by 30%, built real-time systems serving
          thousands of concurrent users, and mentored teams on scalable architecture.
          I own features end-to-end — from FastAPI and GraphQL services to pixel-perfect
          UIs — collaborating closely with product and design in fast-paced environments.
        </p>
        <ul className="about-stats">
          {stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
