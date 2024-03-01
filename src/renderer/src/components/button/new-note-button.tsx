import { FilePen } from "lucide-react";
import { Button } from "../ui/button";

export function NewNoteButton() {
    return (
        <Button variant="secondary">
            <FilePen className="w-6 h-6 text-zinc-300" />
        </Button>
    );
}