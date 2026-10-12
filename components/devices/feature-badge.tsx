import { Check, X } from 'lucide-react';
import { InfoTooltip } from '@/components/devices/info-tooltip';
import { PartialStatusIcon } from '@/components/devices/partial-status-icon';
import { cn } from '@/lib/utils';

interface FeatureBadgeProps {
  label: string;
  value: boolean | 'partial';
  /** Clarification shown behind an (i) button, e.g. a partial-support caveat. */
  note?: string;
  className?: string;
}

export function FeatureBadge({
  label,
  value,
  note,
  className,
}: FeatureBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 font-sans text-[13px] leading-none',
        value === true && 'bg-panel-green text-green-darkest',
        value === false && 'bg-muted text-muted-foreground',
        value === 'partial' && 'bg-accent-orange/20 text-slate',
        className,
      )}
    >
      {value === true && <Check className="h-3.5 w-3.5 shrink-0" />}
      {value === false && <X className="h-3.5 w-3.5 shrink-0" />}
      {value === 'partial' && (
        <PartialStatusIcon className="h-3.5 w-3.5 shrink-0" />
      )}
      {label}
      {note && <InfoTooltip text={note} />}
    </span>
  );
}
