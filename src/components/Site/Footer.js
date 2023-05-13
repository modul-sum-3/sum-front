import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// eslint-disable-next-line import/no-extraneous-dependencies

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="flex justify-center">
        <a href="https://www.facebook.com/" className="mx-4 flex items-center text-white">
          <FaFacebook className="mr-2" />
          Facebook
        </a>
        <a href="https://twitter.com/" className="mx-4 flex items-center text-white">
          <FaTwitter className="mr-2" />
          Twitter
        </a>
        <a href="https://www.instagram.com/" className="mx-4 flex items-center text-white">
          <FaInstagram className="mr-2" />
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
