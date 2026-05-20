"use client";

import Link from "next/link";
import Image from "next/image";

interface FacebookPostCardProps {
  authorName: string;
  citation: string;
  postUrl: string;
  maxCharacters?: number;
}

const truncateText = (text: string, maxChars: number): string => {
  if (text.length <= maxChars) return text;
  return text.substring(0, maxChars).trim() + "...";
};

const FacebookPostCard: React.FC<FacebookPostCardProps> = ({
  authorName,
  citation,
  postUrl,
  maxCharacters = 350,
}) => {
  const truncatedCitation = truncateText(citation, maxCharacters);

  return (
    <Link href={postUrl} target="_blank" rel="noopener noreferrer">
      <div
        className="bg-white rounded-lg shadow-md p-6 max-w-md hover:shadow-lg transition-shadow duration-200 cursor-pointer border-l-4"
        style={{ borderLeftColor: "var(--color-norway)" }}
      >
        <blockquote className="italic text-gray-700 mb-4">
          "{truncatedCitation}"
        </blockquote>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-primary">{authorName}</p>
          <Image
            src="/images/facebook-logo.png"
            alt="Facebook"
            width={20}
            height={20}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">View on Facebook</p>
      </div>
    </Link>
  );
};

export default FacebookPostCard;
