import { classNames } from "shared/aliases";
import cls from "./Button.module.scss";
import { ReactNode } from "react";

export enum CategoryVariants {
    ALL_CATEGORIES = "all-categories",
    NEWS_CATEGORY = "news-category",
    TEACHER_CATEGORY = "teacher-category",
    HELP_CATEGORY = "help-category",
}

export enum ButtonTheme {
    PRIMARY = "primary",
    OUTLINE = "outline",
}

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    isSelected?: boolean;
    category?: CategoryVariants;
    theme?: ButtonTheme;
}
export const Button = (props: ButtonProps) => {
    const { className, children, isSelected=false, category, theme=ButtonTheme.PRIMARY } =
        props;
    return (
        <div>
            <button
                className={classNames(cls.Button, {}, [
                    className,
                    cls[theme],
                    category ? cls[category] : "",
                    isSelected ? cls["Button-selected"] : "",
                ])}>
                {children}  
            </button>
        </div>
    );
};
