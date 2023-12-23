import "./techs.scss"

export default function Techs() {
  return (
    <section id="cd-timeline" className="cd-container">
      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-picture">
        </div>

        <div className="cd-timeline-content">
          <h2>Technologies</h2>
          <div className="timeline-content-info">
            <span className="timeline-content-info-title">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              Full Stack Developer
            </span>
            <span className="timeline-content-info-date">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              December 2023 - Present
            </span>
          </div>
          <p>My love is in Front-End, but Back-End is not bad either.</p>
          <ul className="content-skills">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Material UI</li>
            <li>Tailwind</li>
            <li>Framer Motion</li>
            <li>Sass</li>
          </ul>
        </div>
      </div>

      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-movie">
        </div>

        <div className="cd-timeline-content">
          <h2>Who am I?</h2>
          <p>My name is Kevin Nahuel Moreira Gomez, born in Uruguay on October 3, 2002. Always raised surrounded by technology from a very young age; I believe thats where my love for technology comes from.</p>
        </div>
      </div>

      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-picture">
        </div>

        <div className="cd-timeline-content">
          <h2>My Passion for the Programming World</h2>
          <p>Web programming has always been of interest to me—total love for designing, coding, and creating. One of my biggest goals in life as a programmer is to create a streaming platform like the purple one.</p>
        </div>
      </div>
    </section>
  );
}
