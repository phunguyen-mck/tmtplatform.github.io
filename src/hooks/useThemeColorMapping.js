import { useContext } from 'react';
import { ThemeContext } from '@mds/mds-reactjs-library';

const useThemeColorMapping = () => {
  const theme = useContext(ThemeContext);
  return {
    primaryColor: theme.button.color.background.primary,
  };
};

export default useThemeColorMapping;
