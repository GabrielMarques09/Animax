import React from "react";

const ButtonLink = ( {href, className, ...props} ) => {
  return <a href={href} className={className}>{props.children}</a>;
};

export default ButtonLink;
