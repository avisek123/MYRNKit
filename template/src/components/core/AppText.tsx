import {useTranslation} from 'react-i18next';
import {Text, TextProps} from 'react-native';
import React from 'react';

interface AppTextProps extends TextProps {
  text: string;
  isDynamicText?: boolean;
}

const AppText: React.FC<AppTextProps> = ({
  text,
  isDynamicText = false,
  style,
  ...rest
}) => {
  const {t, i18n} = useTranslation();

  return (
    <Text style={style} {...rest}>
      {isDynamicText ? text : t(text)}
    </Text>
  );
};

export default React.memo(AppText);
