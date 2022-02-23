export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  useEffect(() => {
    document.title = title;
  }, [title]);
  return setTitle;
};
