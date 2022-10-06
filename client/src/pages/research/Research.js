import React from "react";
import "./researchItem.css";

const Research = () => {
  return (
    <div>
      <div className="contentR">
        <h1>Do your exercises properly!</h1>
        <h2 className="h">
          Follow these tutorials to follow along and learn how to do an
          exercise.
        </h2>
      </div>

      <div>
        <h4 className="he">Push-ups</h4>
        <div class="o-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IODxDxX7oi4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div>
        <h4 className="he">Pull-ups</h4>
        <div class="o-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XeErfmGSwfE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div>
        <h4 className="he">Sit-ups</h4>
        <div class="o-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-WSon5E798w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div>
        <h4 className="he">Squats</h4>
        <div class="o-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YaXPRqUwItQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div>
        <h4 className="he">Walking</h4>
        <div class="o-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8i3Vrd95o2k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Research;
