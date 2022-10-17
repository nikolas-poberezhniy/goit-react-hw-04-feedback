import { OptionsButton } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(e => {
    return (
      <OptionsButton key={`${e}Option`} onClick={onLeaveFeedback} name={e}>
        {e}
      </OptionsButton>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
