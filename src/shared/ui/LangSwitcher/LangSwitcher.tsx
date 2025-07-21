import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import i18n from 'shared/config/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t } = useTranslation()

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button 
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={onToggle}
    >
      {t('Язык')}
    </Button>
  );
};