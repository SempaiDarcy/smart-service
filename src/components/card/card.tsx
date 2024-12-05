import { ComponentPropsWithoutRef, forwardRef } from "react";
import { clsx } from "clsx";
import s from "./card.module.scss";

export const Card = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
    ({ className, style, children, ...rest }, ref) => {
        const classNames = {
            card: clsx(s.card, className),
        };

        return (
            <div className={classNames.card} style={style} ref={ref} {...rest}>
                {children}
            </div>
        );
    }
);
