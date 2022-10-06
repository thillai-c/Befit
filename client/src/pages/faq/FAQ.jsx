import React, { useState } from "react";
import FAQP from "./FAQP";
import "./faq.css";
function FAQ() {
  const [faqs, setfaqs] = useState([
    {
      question: "Can I use the Tracking Model without having an account?",
      answer:
        "Yes you can use the Tracking Model to track your exercise without having an account however you progress on the same will not be stored from our side.",
      open: false,
    },
    {
      question: "What is the best workout to lose weight and look good?",
      answer:
        "Every exercise and workout caters to different people differently. We suggest you explore the exercises listed by us and form a workout that feels right for you, or look for a predefined workout on youtube which you can follow along to.",
      open: false,
    },
    {
      question:
        "How do I know that I am doing an exercise the right way in order to not injure myself?",
      answer:
        "You should refer to the 'How To' video section that we have put up which has instructions on how to do the exercises that we are focusing on.",
      open: false,
    },
    {
      question: "How do I increase my points?",
      answer:
        "In order to increase your points you have to work out and track your progress on our system. As you do this, your points will increase. We wish you the best of luck!",
      open: false,
    },
    {
      question: "Can I link this app to my fitness watch?",
      answer:
        "We are working on it at the moment. This feature will be provided soon.",
      open: false,
    },
  ]);
  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div className="App">
      <div className="contentF">
        <h1>FAQ</h1>
      </div>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQP faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
