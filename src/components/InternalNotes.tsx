"use client";

import { Pencil } from "lucide-react";

export default function InternalNotes() {
  return (
    <div className="border border-gray-200 rounded-lg bg-white">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div>
          <h2 className="text-sm font-semibold text-gray-800">Internal Notes</h2>
          <p className="text-[10px] text-gray-400 mt-0.5">
            Add your notes here — these notes will only be visible to finance team
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <Pencil size={13} />
        </button>
      </div>
      <div className="px-4 py-3">
        <p className="text-xs text-gray-600 leading-5">
          Ah yes, the classic &quot;one last look&quot; — because nothing ever goes wrong after that{" "}
          <span className="text-base">😅</span> Design status? No rush, it&apos;s only urgent. And
          that one lonely ordering? Let&apos;s poke the client — maybe they&apos;ll notice this
          century. Lets go baby !!
        </p>
      </div>
    </div>
  );
}
