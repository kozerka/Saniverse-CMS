import clsx from "clsx";
import { Marker } from "./Marker";
import { type ReactNode } from "react";

export const Button = ({
    icon,
    children,
    href,
    onClick,
    containerClassName,
    markerFill,
}: {
    icon?: ReactNode;
    children?: string;
    href?: string;
    onClick?: () => void;
    containerClassName?: string;
    markerFill?: string;
}) => {
    const Inner = () => (
        <>
            <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
                <span className="absolute -left-[1px] group-hover:scale-150 transition-all duration-300">
                    <Marker fill={markerFill} />
                </span>

                <span className="relative z-2 mx-5 font-poppins base-bold text-p1 uppercase">
                    {children}
                </span>
                {icon && (
                    <span className=" z-10 ml-1 flex items-center">
                        {typeof icon === "string" ? (
                            <img
                                src={icon}
                                alt="icon"
                                className="size-10 object-contain"
                            />
                        ) : (
                            icon
                        )}
                    </span>
                )}
            </span>

            <span className="glow-before glow-after" />
        </>
    );
    return href ? (
        <a
            className={clsx(
                "relative p-0.5 g5 rounded-2xl shadow-500 group",
                containerClassName
            )}
            href={href}
        >
            <Inner />
        </a>
    ) : (
        <button
            className={clsx(
                "relative p-0.5 g5 rounded-2xl shadow-500 group",
                containerClassName
            )}
            onClick={onClick}
        >
            <Inner />
        </button>
    );
};
