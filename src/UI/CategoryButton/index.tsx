import React, { useEffect, useRef, ForwardedRef, forwardRef } from "react";
import styles from "./categoryButton.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  active?: boolean;
  big?: boolean;
  doFocus?: boolean;
}

const CategoryButton = forwardRef<HTMLButtonElement, Props>(
  (
    { title, active = false, big = false, doFocus = false, ...attrs },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      if (active && buttonRef.current && doFocus) {
        buttonRef.current.scrollIntoView({
          inline: "center",
        });
      }
    }, [active, doFocus]);

    // Forward the ref to the button element
    React.useImperativeHandle(ref, () => buttonRef.current!);

    return (
      <button
        ref={(el) => {
          // @ts-ignore
          buttonRef.current = el;
          if (typeof ref === "function") {
            ref(el);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
              el;
          }
        }}
        className={`${big ? styles.big_button : styles.small_button} ${
          active && styles.active
        }`}
        {...attrs}
      >
        <p className={`${styles.title} ${active && styles.active}`}>{title}</p>
      </button>
    );
  }
);

CategoryButton.displayName = "CategoryButton";

export default CategoryButton;
