import clsx from 'clsx';

export const Badge = ({
    children,
    className,
    href,
}: {
    children?: string;
    className?: string;
    href?: string;
}) => {
    const commonClasses = clsx(
        'relative inline-block p-0.5 g5 rounded-full shadow-500 group overflow-hidden',
        href ? 'cursor-pointer' : 'cursor-default',
        className
    );

    if (href) {
        return (
            <a href={href} className={commonClasses}>
                <span className="relative inline-flex items-center min-h-[40px] px-6 g4 rounded-full inner-before overflow-hidden group-hover:before:opacity-100">
                    <span className="relative z-2 mx-2 font-inter base-bold uppercase">
                        {children}
                    </span>
                </span>
            </a>
        );
    }

    return (
        <span className={commonClasses}>
            <span className="relative inline-flex items-center min-h-[40px] px-6 g4 rounded-full inner-before overflow-hidden group-hover:before:opacity-100">
                <span className="relative z-2 mx-2 font-inter base-bold uppercase">
                    {children}
                </span>
            </span>
        </span>
    );
};
