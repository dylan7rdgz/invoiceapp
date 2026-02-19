"use client";

import { ArrowLeft, Bell, FileText, CheckSquare, Grid3X3, Search, Settings, Moon } from "lucide-react";

export default function InvoiceHeader() {
  return (
    <div className="flex flex-col border-b border-gray-200 bg-white">
      {/* Top icon strip */}
      <div className="flex items-center justify-end gap-2 px-6 py-1.5 border-b border-gray-100">
        <button className="p-1 text-gray-400 hover:text-gray-600"><Grid3X3 size={12} /></button>
        <button className="p-1 text-gray-400 hover:text-gray-600"><Search size={12} /></button>
        <button className="p-1 text-gray-400 hover:text-gray-600"><Settings size={12} /></button>
        <button className="p-1 text-gray-400 hover:text-gray-600"><Moon size={12} /></button>
      </div>

      {/* Main header row */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left: back + invoice number */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors">
            <ArrowLeft size={14} />
          </button>
          <div>
            <h1 className="text-sm font-semibold text-gray-800">INV-20234567</h1>
            <p className="text-[10px] text-gray-400">
              Review and manage all your invoices — track payments, issue credits, or mark them as paid.
            </p>
          </div>
        </div>

        {/* Right: action buttons */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Bell size={11} />
            Notify customer
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <FileText size={11} />
            Add credit note
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
            <CheckSquare size={11} />
            Mark as paid
          </button>
        </div>
      </div>
    </div>
  );
}
