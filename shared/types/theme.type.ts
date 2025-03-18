export type ThemeAspect = 'plain' | 'fill' | 'mild';

export type ThemePriority = 'primary' | 'secondary' | 'tertiary' | 'quadriary';

export type ThemeTextPriority =
  | ThemePriority
  | 'black'
  | 'white'
  | 'title'
  | 'subtitle'
  | 'main'
  | 'placeholder'
  | 'muted'
  | 'actions'
  | 'tabs'
  | 'titleConfirm'
  | 'subtitleConfirm'
  | 'mutedConfirm';

export type ThemeFamily = 'main' | 'actions';

export type ThemeWeight = 'regular' | 'medium' | 'semiBold' | 'bold';

export type ThemeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
