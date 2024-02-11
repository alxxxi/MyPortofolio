import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alif Safa Moleo </span>
            from <span className="purple"> Makassar, Indonesia</span>
            <br />
            I build this website to learn and educate.
            <br />
            Next i wanna do is to get my dream come true. InsyaAllah
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Design Photo
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editor
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "it's better to get lost than to just sit around and do nothing"{" "}
          </p>
          <footer className="blockquote-footer">Alif</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
