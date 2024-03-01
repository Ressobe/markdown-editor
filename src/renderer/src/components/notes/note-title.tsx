import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function NoteTitle({ className, ...props }: ComponentProps<'div'>) {
    const title = "title";

    return (
        <div className={twMerge('flex justify-center mt-2', className)} {...props}>
            <span className="text-gray-400 text-xl">{title}</span>
        </div>
    )
}