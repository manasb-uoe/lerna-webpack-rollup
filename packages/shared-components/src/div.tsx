import React from 'react';

export const Div = (props: React.PropsWithChildren<{}>) => {
    React.useEffect(() => {
        console.log("rendering shared-components div...");
    }, []);

    return <div>{props.children}</div>
}