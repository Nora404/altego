import { NavLink } from 'react-router-dom';

type ButtonProps = {
    to: string;
    children: React.ReactNode;
};

export default function Button({ to, children }: ButtonProps) {
    return (
        <NavLink to={to} className="button" style={{ height: "25px" }}>
            {children}
        </NavLink>
    );
}
