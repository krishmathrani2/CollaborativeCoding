import React, { useEffect, useRef } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeEditor = ({ sessionId }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        const ws = new WebSocket(`ws://localhost:8000/ws/collaboration/${sessionId}/`);

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (editorRef.current) {
                editorRef.current.editor.setValue(data.message, 1);
            }
        };

        if (editorRef.current) {
            editorRef.current.editor.on('change', () => {
                const content = editorRef.current.editor.getValue();
                ws.send(JSON.stringify({ message: content }));
            });
        }

        return () => {
            ws.close();
        };
    }, [sessionId]);

    return (
        <AceEditor
            mode="javascript"
            theme="monokai"
            name="code-editor"
            editorProps={{ $blockScrolling: true }}
            ref={editorRef}
        />
    );
};

export default CodeEditor;
