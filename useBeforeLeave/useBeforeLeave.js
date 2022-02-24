export const useBeforeLeave = (onLeave) => {
  if (typeof onLeave !== "function") {
    return;
  }
  const handleLeave = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onLeave();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handleLeave);
    return () => document.removeEventListener("mouseleave", handleLeave);
  }, []);
};
