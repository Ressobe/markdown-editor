import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

export function DeleteNoteButton() {
    return (
        <Button>
            <Trash2 className="w-4 h-4 text-zinc-300" />
        </Button>
    );
}