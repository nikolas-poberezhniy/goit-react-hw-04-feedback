import { SectionSt } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionSt>
      {title && <h2>{title}</h2>}
      {children}
    </SectionSt>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
