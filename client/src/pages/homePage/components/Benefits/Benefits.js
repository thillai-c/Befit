import React from "react";
import {
  Benefit,
  BenefitsImage,
  BenefitsImg,
  BenefitsList,
  BenefitsLists,
  CheckIcon,
  SectionBenefits,
  BenefitsDetails,
  BenefitsImageContainer,
} from "../styles/Benefits.styled";
import {
  SectionDescription,
  SectionTitle,
} from "../styles/SectionHeaders.styled";
import { Section } from "../styles/Sections.styled";
import { benefitsData } from "../../benefitsData";
import BenefitImg from "../../assets/benefits-img.png";

const Benefits = () => {
  return (
    <Section>
      <SectionBenefits>
      <BenefitsImageContainer>
          <BenefitsImage>
            <BenefitsImg src={BenefitImg} alt="benefit image" />
          </BenefitsImage>
        </BenefitsImageContainer>
        <BenefitsDetails>
          <SectionTitle textDefault={true}>the benefits</SectionTitle>
          <SectionDescription textDefault={true}>
          BeFit is not just another exercise tracking model as it gamifies the fitness experience and encourages people to exercise. 
          </SectionDescription>
          <BenefitsLists>
            {benefitsData.map((benefit) => {
              return (
                <BenefitsList key={benefit.id}>
                  <CheckIcon />
                  <Benefit>{benefit.benefit} </Benefit>
                </BenefitsList>
              );
            })}
          </BenefitsLists>
        </BenefitsDetails>
        
      </SectionBenefits>
    </Section>
  );
};

export default Benefits;
