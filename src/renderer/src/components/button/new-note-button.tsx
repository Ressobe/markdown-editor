import { FilePen } from "lucide-react";
import { Button } from "../ui/button";

export function NewNoteButton() {
    return (
        <Button>
            <FilePen className="w-4 h-4 text-zinc-300" />
        </Button>
    );
}