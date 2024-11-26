import clsx from "clsx";


export const Badge = ({
  children,
  className,
}: {
  children?: string;
  className?: string;
}) => {
  return (
    <span
      className={clsx(
        "relative inline-block p-0.5 g5 rounded-full shadow-500 group overflow-hidden",
        className
      )}
    >
      <span className="relative inline-flex items-center min-h-[40px] px-6 g4 rounded-full inner-before overflow-hidden group-hover:before:opacity-100">
        <span className="relative z-2 mx-2 font-inter base-bold uppercase">
          {children}
        </span>
      </span>
    </span>
  );
};
