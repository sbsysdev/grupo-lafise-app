type MergeValue = false | null | undefined | string;

interface MergeString {
  joinValue: string;
  values: MergeValue[];
}

export const mergeString = ({ joinValue, values = [] }: MergeString): string =>
  values.filter(Boolean).join(joinValue);

export const classNames = (...names: MergeValue[]) =>
  mergeString({ values: names, joinValue: ' ' });
