import { JSXElement } from "solid-js";

interface ButtonProps {
    to: string | undefined;
    children: JSXElement;
}

const Button = ({ to, children }: ButtonProps) => {
    return (
        <a href={to}>
            <button class={'border px-4 py-2 rounded border-black uppercase text-lg font-light hover:font-normal text-black'}>{children}</button>
        </a>
    );
};

export default Button;
