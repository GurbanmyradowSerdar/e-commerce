import { VscSend as SendIcon } from "react-icons/vsc";

export default function FooterInput() {
  return (
    <div className="flex items-center gap-3 border-2 border-color-primary px-4 py-3 rounded-sm">
      <input
        type="email"
        placeholder="Enter your email"
        className="bg-transparent placeholder:text-color-text-2 outline-none border-none"
      />
      <SendIcon className="text-color-primary w-6 h-6 text-lg cursor-pointer" />
    </div>
  );
}
