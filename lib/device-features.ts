import type { DeviceFeatures } from '@/content';

/**
 * Plain yes/no features, rendered as check/✕ badges. `touchscreen` is
 * excluded — it reads better as its own "מסך מגע"/"לחצנים" label than a
 * checkmark, see `inputTypeLabel`.
 */
export const FEATURE_LABELS: Record<
  Exclude<keyof DeviceFeatures, 'touchscreen'>,
  string
> = {
  gps: 'GPS',
  sms: 'SMS',
  bluetooth: 'Bluetooth',
  waterResistant: 'עמיד במים (IP52)',
};

const FEATURE_ORDER = Object.keys(
  FEATURE_LABELS,
) as (keyof typeof FEATURE_LABELS)[];

export interface FeatureEntry {
  key: keyof typeof FEATURE_LABELS;
  label: string;
  value: boolean | 'partial';
}

/** Features in display order, skipping any the source data doesn't confirm either way. */
export function listFeatures(features: DeviceFeatures): FeatureEntry[] {
  return FEATURE_ORDER.filter((key) => features[key] !== undefined).map(
    (key) => ({
      key,
      label: FEATURE_LABELS[key],
      value: features[key] as boolean | 'partial',
    }),
  );
}

/** "מסך מגע" / "לחצנים" — undefined when the source data doesn't say either way. */
export function inputTypeLabel(touchscreen?: boolean) {
  if (touchscreen === undefined) return undefined;
  return touchscreen ? 'מסך מגע' : 'לחצנים';
}
