import { React } from 'react';
import { useCollapse } from 'react-collapsed';
import 'materialize-css/dist/css/materialize.css';

{/* imported react-collapsed React component from npm */}
export const Collapsible = (props) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <>
            <link rel="stylesheet" href="./static/css/Collapsible.css"></link>
            <div className="collapsible">
                <div className="header" {...getToggleProps()}>
                    <h1 className="title">{props.title}</h1>
                </div>
                <div {...getCollapseProps()}>
                    <div className="content">
                        {props.content}
                    </div>
                </div>
            </div>
        </>
    );
}