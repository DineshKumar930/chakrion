import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({
  children, to, href, onClick, variant = "primary", size = "md", className = "", type = "button",
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`;
  if (to) return <Link to={to} className={classes} onClick={onClick}>{children}</Link>;
  if (href) return <a href={href} className={classes} onClick={onClick} target="_blank" rel="noopener noreferrer">{children}</a>;
  return <button type={type} className={classes} onClick={onClick}>{children}</button>;
}