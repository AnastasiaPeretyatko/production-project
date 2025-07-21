import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { THEMES, useTheme } from 'app/provider/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '../Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.ThemeSwitch, {}, [className])} 
      onClick={toggleTheme}
    >
      {theme === THEMES.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};