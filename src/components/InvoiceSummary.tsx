"use client";

import { Euro } from "lucide-react";

const lineItems = [
  {
    name: "Airted Napkin Part...",
    sku: "#DN9833",
    qty: 100,
    price: "€ 20",
    total: "€ 400",
    invoiced: "€ 400",
    creditNote: "€ 400",
    creditAction: "red",
  },
  {
    name: "Airted Napkin Part...",
    sku: "#DN9833",
    qty: 100,
    price: "€ 20",
    total: "€ 400",
    invoiced: "€ 400",
    creditNote: "€ 0",
    creditAction: "green",
  },
  {
    name: "Airted Napkin Part...",
    sku: "#DN9833",
    qty: 100,
    price: "€ 20",
    total: "€ 400",
    invoiced: "€ 400",
    creditNote: "€ 0",
    creditAction: "green",
  },
];

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 border-r border-gray-100 last:border-r-0">
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
        <Euro size={10} className="text-gray-500" />
      </div>
      <div>
        <p className="text-[9px] text-gray-400 leading-tight">{label}</p>
        <p className="text-sm font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

export default function InvoiceSummary() {
  return (
    <div className="border border-gray-200 rounded-lg bg-white">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-800">Invoice Summary</h2>
        <p className="text-[10px] text-gray-400 mt-0.5">
          This summary shows all items billed, total value, and payments made against the invoice.
        </p>
      </div>

      {/* Meta row */}
      <div className="grid grid-cols-4 px-4 py-3 border-b border-gray-100 gap-4">
        <div>
          <p className="text-[9px] text-gray-400 mb-0.5">Invoice ID</p>
          <p className="text-xs font-medium text-gray-700">INV-20231121</p>
        </div>
        <div>
          <p className="text-[9px] text-gray-400 mb-0.5">Tenant name</p>
          <p className="text-xs font-medium text-gray-700">TheBrandingClub</p>
        </div>
        <div>
          <p className="text-[9px] text-gray-400 mb-0.5">Order ID</p>
          <p className="text-xs font-medium text-gray-700">TBC-ORD-766543</p>
        </div>
        <div>
          <p className="text-[9px] text-gray-400 mb-0.5">Created Date</p>
          <p className="text-xs font-medium text-gray-700">22 Jan 2022</p>
        </div>
      </div>

      {/* Metrics row */}
      <div className="flex border-b border-gray-100">
        <MetricCard label="Invoiced excl. VAT" value="€ 2000" />
        <MetricCard label="Invoiced incl. VAT" value="€ 2060" />
        <MetricCard label="Total credit note excl. VAT" value="€ 2100" />
        <MetricCard label="Total credit note incl. VAT" value="€ 2200" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-[10px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-4 py-2 font-medium text-gray-500">Item</th>
              <th className="text-right px-3 py-2 font-medium text-gray-500">Total qty</th>
              <th className="text-right px-3 py-2 font-medium text-gray-500">Price/ pieces</th>
              <th className="text-right px-3 py-2 font-medium text-gray-500">Total amount</th>
              <th className="text-right px-3 py-2 font-medium text-gray-500">Invoiced amount</th>
              <th className="text-right px-3 py-2 font-medium text-gray-500">Credit note amount</th>
              <th className="text-right px-3 py-2 font-medium text-gray-500">Credit note action</th>
            </tr>
          </thead>
          <tbody>
            {lineItems.map((item, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2.5">
                  <p className="font-medium text-gray-700">{item.name}</p>
                  <p className="text-[9px] text-gray-400">{item.sku}</p>
                </td>
                <td className="px-3 py-2.5 text-right text-gray-600">{item.qty}</td>
                <td className="px-3 py-2.5 text-right text-gray-600">{item.price}</td>
                <td className="px-3 py-2.5 text-right text-gray-600">{item.total}</td>
                <td className="px-3 py-2.5 text-right text-gray-600">{item.invoiced}</td>
                <td className="px-3 py-2.5 text-right">
                  <span
                    className={
                      item.creditNote === "€ 400"
                        ? "text-red-500 font-medium"
                        : "text-gray-600"
                    }
                  >
                    {item.creditNote}
                  </span>
                </td>
                <td className="px-3 py-2.5 text-right">
                  <div
                    className={`inline-block w-16 h-5 rounded ${
                      item.creditAction === "green"
                        ? "bg-emerald-500"
                        : "bg-gray-200"
                    }`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
