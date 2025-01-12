import "./styles.css";

interface ButtonCardProps {
    children: React.ReactNode;
    className?: string;
    title: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    padding?: number;
    borderWidth?: number;
}

const ButtonCard: React.FC<ButtonCardProps> = ({children, className="", title="", onClick, type="button", padding=20, borderWidth=1}) => {
    return(
        <button
            className={`button-card-container ${className}`}
            title={title}
            onClick={(event) => onClick(event)}
            type={type}
            style={{
                padding: padding,
                borderWidth: borderWidth
            }}
        >
            {children}
        </button>
    );
}

export { ButtonCard };