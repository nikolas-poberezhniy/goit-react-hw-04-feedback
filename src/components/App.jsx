import { FeedbackOptions } from './FeedbackWidget/FeedbackOptions/FeedbackOptions';
import React, { useState } from 'react';
import { Statistics } from './FeedbackWidget/Statistics/Statistics';
import { Section } from './FeedbackWidget/Section/Section';
import { Notification } from './FeedbackWidget/Notification/Notification';

export function App() {
  console.clear();
  const [good, setGoog] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelOptionClick = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGoog(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handelOptionClick}
        />
      </Section>
      <Section title="Statistick">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
