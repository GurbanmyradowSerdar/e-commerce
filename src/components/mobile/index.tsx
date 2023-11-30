export default function MobileVersion() {
  return (
    <div className="h-screen flex items-center justify-center xl:hidden">
      <div className="text-3xl text-center px-10 flex flex-col gap-5 items-center justify-center">
        {/* <div className="w-20 h-20 bg-text-main-color rounded-full animate-bounce"></div> */}
        <h1>
          This website is not available on{" "}
          <span className="text-color-secondary-2 font-medium">
            Mobile devices
          </span>
        </h1>
        <a
          href="https://github.com/GurbanmyradowSerdar"
          className="underline text-blue-800"
        >
          Creator
        </a>
      </div>
    </div>
  );
}
