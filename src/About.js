import { motion } from "framer-motion";
import "./About.css";
function About({ className }) {
  const about = require("./data/about.json").about;
  return (
    <motion.div className={`${className} about`} id="about">
      <div className="about__header">
        <h1>ABOUT ME</h1>
        <div className="about__area">
          {about.map((item, index) => (
            <div key={index} className="about__desc">
              <div className="about__item">
                <h2>{item.q}</h2>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
