export const useConfirm = (message, onConfirm, onReject) => {
  if (typeof onConfirm !== "function" || typeof onReject !== "function") {
    return;
  }
  const confirmAction = () => (confirm(message) ? onConfirm() : onReject());
  return confirmAction;
};
