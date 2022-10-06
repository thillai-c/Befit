import React from "react";
import {
  HeroImage,
  MainButtons,
  MainDescription,
  MainDetails,
  MainHero,
  MainImage,
  MainTitleLine,
  MainTitleTextGradient,
  MainTitlte,
} from "../styles/Hero.styled";
import { StyledButton } from "../styles/Button.styled";
import {
  BsArrowUpRightCircleFill as ArrowIcon,
  BsFillPlayCircleFill as PlayIcon,
} from "react-icons/bs";
import heroImg from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <MainHero>
      <MainDetails>
        <MainTitlte>
          Make yourself <MainTitleLine>stronger </MainTitleLine> <br />
          <MainTitleTextGradient>than your excuses.</MainTitleTextGradient>
        </MainTitlte>
        <MainDescription>
        BeFit is not a regular fitness app as it 
        gamifies the fitness experience. The app 
        counts the number of reps you do and 
        gives you points and rewards!!
        </MainDescription>
        <MainButtons>
          <StyledButton primary={true}>
            Get Started <ArrowIcon />
          </StyledButton>
        </MainButtons>
      </MainDetails>

      <MainImage>
        <HeroImage src={heroImg} alt="main image" />
      </MainImage>
    </MainHero>
  );
};

export default Hero;
