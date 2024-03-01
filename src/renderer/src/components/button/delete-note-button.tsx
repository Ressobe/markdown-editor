import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

export function DeleteNoteButton() {
    return (
        <Button variant="secondary">
            <Trash2 className="w-6 h-6 text-zinc-300" />
        </Button>
    );
}