import { MDXEditor } from "@mdxeditor/editor";

export function MarkDownEditor() {
    return (
        <MDXEditor 
            markdown={'# Hello from MDX editor'} 
            contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500" 
        />
    );
}