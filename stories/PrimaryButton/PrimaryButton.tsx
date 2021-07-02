import React from "react";

type Props = {
  title: string;
  description?: string;
  as?: "button" | "a";
  onClick?: () => {};
  href?: string;
  disabled?: boolean;
};

export default function PrimaryButton({
  title,
  description,
  as = "button",
  onClick,
  href,
  disabled = false,
}: Props) {
  const Tag = as;
  return (
    <Tag
      disabled={disabled}
      onClick={onClick}
      className={
        "text-center transition duration-300 cursor-pointer inline-flex rounded-full flex-col text-sm text-white shadow-argeta px-6 py-3 disabled:opacity-25 disabled:cursor-not-allowed bg-button-gradient"
      }
    >
      <div className="font-bold tracking-widest uppercase">{title}</div>
      {description && (
        <div className="font-light text-opacity-70">{description}</div>
      )}
    </Tag>
  );
}
