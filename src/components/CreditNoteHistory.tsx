"use client";

import { ChevronDown } from "lucide-react";

export default function CreditNoteHistory() {
  return (
    <div className="border border-gray-200 rounded-lg bg-white">
      <button className="w-full flex items-center justify-between px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold text-gray-800 text-left">Credit note history</h2>
          <p className="text-[10px] text-gray-400 mt-0.5 text-left">
            View your credit notes for this invoice. Each entry shows the date, value and items credited.
          </p>
        </div>
        <ChevronDown size={14} className="text-gray-400 flex-shrink-0" />
      </button>
    </div>
  );
}
