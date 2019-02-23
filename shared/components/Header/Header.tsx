import React from "react";
import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Header: React.FunctionComponent = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  );
};

export default Header;
