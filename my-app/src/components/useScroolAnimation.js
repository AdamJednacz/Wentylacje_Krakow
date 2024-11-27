import { useEffect } from "react";

const useScrollAnimation = (selector) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("scroll-visible");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(selector);

        hiddenElements.forEach((el) => {
            if (!el.classList.contains("hidden")) {
                el.classList.add("hidden");
            }
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, [selector]);
};

export default useScrollAnimation;
