// App.tsx
import React from 'react';
import SplitPane from './components/SplitPane';
import ImageContainer from './components/ImageContainer';
import GroupTagsPanel from './components/GroupTagsPanel';
import FileTagsPanel from './components/FileTagsPanel';

const App: React.FC = () => {
    return (
        <SplitPane direction="horizontal">
            <ImageContainer />
            <SplitPane direction="vertical">
                <GroupTagsPanel />
                <FileTagsPanel />
            </SplitPane>
        </SplitPane>
    );
};

export default App;
