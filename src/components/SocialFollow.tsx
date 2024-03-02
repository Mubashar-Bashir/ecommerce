import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container mt-5 flex items-center">
      <Link href="https://www.facebook.com/learnbuildteach/" passHref>
  <div className="facebook social text-sm mr-2">
    <FontAwesomeIcon icon={faFacebook} />
  </div>
</Link>
      <h3 className="mr-2">Social Follow</h3>
      <Link href="https://www.facebook.com/learnbuildteach/" passHref>
  <div className="facebook social text-sm mr-2">
    <FontAwesomeIcon icon={faFacebook} />
  </div>
</Link>
<Link href="https://www.facebook.com/learnbuildteach/" passHref>
  <div className="facebook social text-sm mr-2">
    <FontAwesomeIcon icon={faFacebook} />
  </div>
</Link>
<Link href="https://www.facebook.com/learnbuildteach/" passHref>
  <div className="facebook social text-sm mr-2">
    <FontAwesomeIcon icon={faFacebook} />
  </div>
</Link>
    </div>
  );
}
