import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            cursor: "pointer",
            background: "#1b2a38",
            padding: "0.75rem",
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          <FaArrowUp style={{ color: "#fff", fontSize: "20px" }} />
        </div>
      )}
    </>
  );
}

export default BackToTop;