import { Data } from "@/app/Data";

export default function Footer() {
    return (
    <footer className="w-full bg-black text-white px-6 py-16 flex flex-col items-center border-t border-neutral-800">
      <div className="max-w-2xl text-center flex flex-col items-center gap-4">
        <span className="text-4xl text-neutral-500 font-serif leading-none">
          &ldquo;
        </span>

        <p className="text-xl md:text-2xl italic font-medium text-neutral-100">
            {Data.footer.Quote}
        </p>

        <div className="flex items-center gap-3 mt-2">
          <span className="w-8 h-px bg-neutral-600" />
          <span className="text-xs tracking-widest uppercase text-neutral-400">
            {Data.footer.Quotename}
          </span>
          <span className="w-8 h-px bg-neutral-600" />
        </div>
      </div>

      <div className="w-full mt-16 pt-6 border-t border-neutral-800 flex flex-col items-center gap-1 text-xs text-neutral-500">
        <p>
          Designed &amp; Developed by{" "}
          <span className="font-semibold text-neutral-300">{Data.footer.name}</span>
        </p>
        <p>© {Data.footer.year} All rights reserved.</p>
      </div>
    </footer>
  );
}
    