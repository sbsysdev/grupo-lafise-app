/* native */
import { useRef } from 'react';
import { Pressable, TextInput, View } from 'react-native';
/* props */
import { FieldProps } from './field.props';
/* components */
import { Label } from '../Label';
/* utils */
import { classNames } from '@/shared/utils';

const Field = ({
  className,
  style,
  title,
  before,
  after,
  hint,
  error,
  editable,
  ...rest
}: FieldProps) => {
  const textInputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    if (!editable) return;

    textInputRef.current?.focus();
  };

  return (
    <Pressable className="gap-1" onPress={handleFocus} disabled={!editable}>
      {typeof title === 'string' ? <Label weight="semiBold">{title}</Label> : title}

      <View
        className={classNames(
          'flex-row items-center gap-1 px-4 rounded-xl border',
          error ? 'border-secondaryFill' : 'border-disabled'
        )}
      >
        {before}

        <View style={{ flex: 1 }}>
          <TextInput
            className={classNames(
              'h-14 font-mainSemiBold text-main max-w-max',
              error ? 'placeholder:text-secondaryFill' : 'placeholder:text-placeholder'
            )}
            style={[style]}
            ref={textInputRef}
            editable={editable}
            {...rest}
          />
        </View>

        {after}
      </View>

      {typeof hint === 'string' ? (
        <Label className="self-center" size="sm" priority={error ? 'secondary' : 'main'}>
          {hint}
        </Label>
      ) : (
        hint
      )}
    </Pressable>
  );
};

export default Field;
