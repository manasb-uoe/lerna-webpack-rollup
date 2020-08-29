import React from 'react';

export const Button = (props: React.PropsWithChildren<{}>) => {
    React.useEffect(() => {
        console.log("rendering button");
    }, []);

    return <button>{props.children}</button>
}