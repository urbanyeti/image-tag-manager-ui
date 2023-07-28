import React from 'react';
import Split from 'react-split';

type SplitPaneProps = {
    direction: 'horizontal' | 'vertical';
    children: React.ReactNode[];
};

const SplitPane: React.FC<SplitPaneProps> = ({ direction, children }) => {
    const splitDirection = direction === 'vertical' ? 'vertical' : 'horizontal';
    
    return (
        <Split sizes={[50, 50]} direction={splitDirection} minSize={100} expandToMin={true} gutterSize={10} gutterAlign="center" snapOffset={30} dragInterval={1} cursor="col-resize">
            {children}
        </Split>
    );
};

export default SplitPane;
