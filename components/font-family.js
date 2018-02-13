export const Letter = (props) => (
  <span style={props.style}>
    {props.character}
  </span>
);

export const Space = (props) => (
  <span className="space" style={props.style}>
    &nbsp;
    <style jsx>{`
      @media screen and (min-width: 520px) {
        .space {
          font-size: 0.1rem; }
      @media screen and (max-width: 519px) {
        .space {
          font-size: 0.1rem; }
    `}</style>
  </span>
);

export const Period = (props) => (
  <span className="period" style={props.style}>
    .
    <style jsx>{`
      @media screen and (min-width: 520px) {
        .period {
          font-size: 0.9rem; } }
      @media screen and (max-width: 519px) {
        .period {
          font-size: 1rem; } }
    `}</style>
  </span>
);
