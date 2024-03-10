import React, { ReactNode } from 'react';
import { classNames } from 'shared/aliases';
import cls from './Button.module.scss';

export enum CategoryVariants {
    ALL_CATEGORIES = 'all-categories',
    NEWS_CATEGORY = 'news-category',
    TEACHER_CATEGORY = 'teacher-category',
    HELP_CATEGORY = 'help-category',
}

export enum ButtonTheme {
    PRIMARY = 'primary',
    OUTLINE = 'outline',
}

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    isSelected?: boolean;
    category?: CategoryVariants;
    theme?: ButtonTheme;
    clickEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}
export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        isSelected = false,
        category,
        theme = ButtonTheme.PRIMARY,
        disabled = false,
        clickEvent,
        ...otherProps
    } = props;
    const mods: Record<string, boolean> = {
        [cls.disabled]: disabled,
    };
    return (
        <div>
            <button
                onClick={(e) => clickEvent(e)}
                disabled={disabled}
                className={classNames(cls.Button, mods, [
                    className,
                    cls[theme],
                    category ? cls[category] : '',
                    isSelected ? cls['Button-selected'] : '',
                ])}
            >
                {children}
            </button>
        </div>
    );
};
