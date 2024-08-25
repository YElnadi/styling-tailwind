import React from "react";

const Footer = () => {
  return (
    <div className=" flex justify-between border border-t-purple p-4 bg-purple-200 text-purple-600">
      <div>(This is Not a Real Website)</div>
      <div>
        Made with <i class="fa-duotone fa-solid fa-heart"></i> and{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="underline text-purple-700"
        >
          Tailwind CSS
        </a>
      </div>
      <div>Created by Yasmine Elnadi </div>
    </div>
  );
};

export default Footer;
