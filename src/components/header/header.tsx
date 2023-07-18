"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [logoText, setLogoText] = useState("MARVEL");
  return (
    <div
      data-testid="header"
      className="bg-primaryGray flex flex-row justify-center border-b-solid border-b border-b-primaryRed"
      onMouseEnter={() => setLogoText("MARVEL")}
      onMouseLeave={() => setLogoText("M")}
    >
      <Link
        key={logoText}
        className="animate-fadeIn text-white bg-primaryRed  p-1 text-6xl font-marvel"
        href="/"
        title="home"
      >
        {logoText}
      </Link>
    </div>
  );
};

export default Header;
