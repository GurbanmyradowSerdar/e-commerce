export default function loading() {
  return (
    <div className="flex items-center justify-center h-[70dvh] bg-black/5">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-color-secondary-2 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
}
