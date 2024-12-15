import clsx from 'clsx';

export const ReadMoreButton = ({
    href,
    children,
    className,
}: {
    href: string;
    children: string;
    className?: string;
}) => {
    const commonClasses = clsx(
        'relative inline-block p-0.5 rounded-full shadow-500 group overflow-hidden',
        'cursor-pointer bg-gradient-to-r from-p1 via-p2 to-p1',
        className
    );

    return (
        <a href={href} className={commonClasses}>
            <span className="relative inline-flex justify-center  w-full just items-center min-h-[40px] px-6 bg-s1 rounded-full inner-before overflow-hidden group-hover:before:opacity-100">
                <span className="relative z-2 mx-2 font-inter base-bold uppercase text-p3 group-hover:text-p1 transition-colors">
                    {children}
                </span>
            </span>
        </a>
    );
};
