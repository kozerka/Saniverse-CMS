export const Marker = ({ fill }: { fill?: string }) => {
    return (
        <svg
            width="8"
            height="16"
            viewBox="0 0 11 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 0C5.47715 0 0 4.92487 0 11C0 17.0751 5.47715 22 11 22V0Z"
                transform="scale(-1, 1) translate(-11, 0)"
                fill={fill || '#2EF2FF'}
            />
        </svg>
    );
};
