import { FeedbackOptions } from './FeedbackWidget/FeedbackOptions/FeedbackOptions';
import React, { Component } from 'react';
import { Statistics } from './FeedbackWidget/Statistics/Statistics';
import { Section } from './FeedbackWidget/Section/Section';
import { Notification } from './FeedbackWidget/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelOptionClick = e => {
    const selectedOption = e.target.name;
    this.setState(prev => {
      return { [selectedOption]: prev[selectedOption] + 1 };
    });
  };

  countTotalFeedback = () => {
    const sumWithInitial = Object.values(this.state).reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    return sumWithInitial;
  };

  countPositiveFeedbackPercentage = () => {
    return Number(
      ((this.state.good / this.countTotalFeedback()) * 100).toFixed(1)
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handelOptionClick}
          />
        </Section>
        <Section title="Statistick">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
