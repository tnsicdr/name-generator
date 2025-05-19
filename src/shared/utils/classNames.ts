type BaseSupportedClassNamesTypes = string | null | undefined | boolean;

/**
 * Merges supplied class names
 */
export function classNames(
  names: (BaseSupportedClassNamesTypes | (() => BaseSupportedClassNamesTypes))[]
) {
  return names.filter((n) => n).join(' ');
}
