import React, {FC} from 'react';

interface ButtonProps{
    children:React.ReactNode
    onClick:()=> number
}
const MyButton:FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default MyButton;