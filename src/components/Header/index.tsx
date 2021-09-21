import { ReactNode } from 'react';



interface HeaderProps {
    children: ReactNode;
}

export function Header({ children }: HeaderProps) {




    return (
        <div id="header">

            <h1>GITHUB PROFILE</h1>
            {children}

        </div >

    );
}