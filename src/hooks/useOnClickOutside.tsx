import React, { useEffect } from "react";
interface IProps {
  ref: any;
  handler: (event: UIEvent) => void;
}

const useOnClickOutside = ({ ref, handler }: IProps) => {
  useEffect(() => {
    const listener = (event: UIEvent) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
