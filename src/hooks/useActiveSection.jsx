import { useState, useEffect } from "react";

const useActiveSection = (sectionIds = []) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for fixed header

      // Find the current section
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener with throttling for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
