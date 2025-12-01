import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to hash with offset to account for fixed header.
// Keeps trying briefly if the target element isn't yet in the DOM.
export default function ScrollToHash({ headerOffset = 64 }) {
  const location = useLocation();

  useEffect(() => {
    if (!location) return;

    const hash = location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    let attempts = 0;
    const maxAttempts = 12; // try for ~1.2s
    const intervalMs = 100;

    const scrollToElement = (el) => {
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(elementPosition - headerOffset, 0);
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    };

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        scrollToElement(el);
        return true;
      }
      return false;
    };

    if (!tryScroll()) {
      const handle = setInterval(() => {
        attempts += 1;
        if (tryScroll() || attempts >= maxAttempts) {
          clearInterval(handle);
        }
      }, intervalMs);

      return () => clearInterval(handle);
    }
  }, [location, headerOffset]);

  return null;
}
