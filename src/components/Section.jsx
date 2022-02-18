import PropTypes from 'prop-types';

export function Section({ title, className, children }) {
  return (
    <section className={className}>
      {title && <h2 className="title">{title}</h2>}

      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
