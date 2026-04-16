import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: Props) {
  return (
    <button
      className={cn(
        'rounded-lg bg-brand-500 px-4 py-2 font-medium text-white shadow hover:bg-brand-700 disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}
