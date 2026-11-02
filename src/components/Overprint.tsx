const Overprint = ({ children }: { children: string }) => (
  <span className="overprint">
    {children}
    <span className="overprint-layer" aria-hidden="true">{children}</span>
  </span>
);

export default Overprint;
