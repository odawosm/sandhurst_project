export default function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </Tag>
  );
}
