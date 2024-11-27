import clsx from 'clsx';
import { type ReactNode } from 'react';

export const MagicButton = ({
    children,
    icon,
    iconPosition = 'left',
    onClick,
    containerClassName,
}: {
    children: string;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    onClick?: () => void;
    containerClassName?: string;
}) => {
    return (
        <button
            className={clsx(
                'relative inline-flex h-16   overflow-hidden rounded-xl p-[1px] focus:outline-none',
                containerClassName
            )}
            onClick={onClick}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00d4e3_0%,#393BB2_50%,#E2CBFF_100%)]" />

            <span
                className={clsx(
                    'inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-s2 g4 hover:g5 px-9 text-md font-bold text-g2 uppercase backdrop-blur-3xl gap-2 transition-all duration-500'
                )}
            >
                {iconPosition === 'left' && icon && (
                    <span className="flex items-center">{icon}</span>
                )}
                <span>{children}</span>
                {iconPosition === 'right' && icon && (
                    <span className="flex items-center">{icon}</span>
                )}
            </span>
        </button>
    );
};
