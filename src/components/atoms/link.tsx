import React from 'react'
import { Link, useRoute } from 'wouter'

const ActiveLink = (props: any) => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a className={isActive ? "active" : ""}>{props.children}</a>
    </Link>
  );
};

export default ActiveLink
