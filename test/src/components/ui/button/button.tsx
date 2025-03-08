import {ButtonHTMLAttributes} from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme: 'first' | 'second' | 'third' | 'fourth' | 'fifth'
    children? : string
}
export default function Button({ theme,children, ...props}:Button) {

    return(
        <div>
            <button  className={theme === "first" ? 'bg-black color-white p-4 m-4' : theme === "second" ?
                "bg-white color-white p-4 m-4" : ""} {...props}>
                {children}
            </button>
        </div>
    )
}