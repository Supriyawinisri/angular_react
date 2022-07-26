import * as React from 'react';
export const MyReactComponent = () => {
    const [text, setText] = React.useState("Priya");
    const onClick = () => {
        setText("Button Clicked ")
    }
    return (<>
    {text}
    <button onClick={onClick}>Click</button>
    </>)
}