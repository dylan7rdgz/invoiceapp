"use client";

import { Download, Plus } from "lucide-react";

export default function InvoicePreview() {
  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-xs font-medium text-gray-700">Invoice preview</h2>
      </div>

      {/* Invoice document preview */}
      <div className="flex-1 overflow-auto p-4">
        <div className="bg-white border border-gray-200 rounded shadow-sm min-h-[360px] p-4 text-[7px] text-gray-700">
          {/* AIM Logo */}
          <div className="mb-3">
            <div className="text-[16px] font-black tracking-widest text-gray-800">AIM</div>
          </div>

          {/* Invoice meta */}
          <div className="flex justify-between mb-3">
            <div>
              <p className="font-semibold text-[8px] text-gray-800">TheBrandingClub</p>
              <p className="text-gray-400">123 Street, City</p>
              <p className="text-gray-400">VAT: BE0123456789</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-[8px] text-gray-800">INVOICE</p>
              <p className="text-gray-400">INV-20234567</p>
              <p className="text-gray-400">Date: 22 Jan 2022</p>
            </div>
          </div>

          {/* Line items table */}
          <div className="border border-gray-200 rounded mb-3">
            <div className="grid grid-cols-6 bg-gray-100 px-2 py-1 gap-1">
              <span className="col-span-2 font-semibold text-gray-600">DESCRIPTION</span>
              <span className="font-semibold text-gray-600 text-right">QTY</span>
              <span className="font-semibold text-gray-600 text-right">PRICE</span>
              <span className="font-semibold text-gray-600 text-right">VAT</span>
              <span className="font-semibold text-gray-600 text-right">TOTAL</span>
            </div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="grid grid-cols-6 px-2 py-1 gap-1 border-t border-gray-100">
                <span className="col-span-2 text-gray-500">Airted Napkin Part...</span>
                <span className="text-gray-500 text-right">100</span>
                <span className="text-gray-500 text-right">€ 20</span>
                <span className="text-gray-500 text-right">21%</span>
                <span className="text-gray-500 text-right">€ 400</span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="flex justify-end mb-3">
            <div className="w-32">
              <div className="flex justify-between py-0.5">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-gray-700">€ 2000</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-gray-500">VAT</span>
                <span className="text-gray-700">€ 420</span>
              </div>
              <div className="flex justify-between py-0.5 border-t border-gray-200 mt-1 font-semibold">
                <span className="text-gray-700">Total</span>
                <span className="text-gray-800">€ 2420</span>
              </div>
            </div>
          </div>

          {/* Signature / stamp area */}
          <div className="flex justify-end mt-4">
            <div className="border border-blue-300 rounded px-4 py-2 text-center text-[7px] text-blue-400">
              <p>PAID</p>
              <p className="text-blue-300">TheBrandingClub</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
        <button className="flex items-center gap-1.5 text-[10px] text-gray-500 hover:text-gray-700">
          <Download size={10} />
          Download invoice
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] text-white bg-emerald-500 rounded-md hover:bg-emerald-600 transition-colors">
          <Plus size={10} />
          Add credit note
        </button>
      </div>
    </div>
  );
}
