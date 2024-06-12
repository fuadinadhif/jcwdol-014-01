"use client";

import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareWhatsapp,
  FaTelegram,
  FaCopy,
} from "react-icons/fa6";
import Link from "next/link";

export default function SocialShare({ size, text }) {
  const url = window.location.href;

  return (
    <div className="flex gap-4">
      <ul className="flex gap-4">
        <li>
          <FaCopy
            size={size}
            onClick={() => navigator.clipboard.writeText(url)}
            className="cursor-pointer"
          />
        </li>
        {[
          [
            <FaSquareXTwitter size={size} />,
            `https://x.com/intent/tweet?text=${text}&url=${url}`,
          ],
          [
            <FaSquareFacebook size={size} />,
            `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          ],
          [
            <FaSquareWhatsapp size={size} />,
            `https://api.whatsapp.com/send?text=${text}%20${url}`,
          ],
          [
            <FaTelegram size={size} />,
            `https://t.me/share/url?url=${url}&text=${text}`,
          ],
        ].map((social, index) => (
          <li>
            <Link href={social[1]} target="_blank">
              {social[0]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
