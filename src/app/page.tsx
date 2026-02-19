import Sidebar from "@/components/Sidebar";
import InvoiceHeader from "@/components/InvoiceHeader";
import InvoicePreview from "@/components/InvoicePreview";
import InternalNotes from "@/components/InternalNotes";
import InvoiceSummary from "@/components/InvoiceSummary";
import CreditNoteHistory from "@/components/CreditNoteHistory";
import ActivityLog from "@/components/ActivityLog";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Invoice header */}
        <InvoiceHeader />

        {/* Body: split into left (preview) and right (details) */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left panel - Invoice preview */}
          <div className="w-[260px] min-w-[260px] flex flex-col overflow-hidden bg-white border-r border-gray-200">
            <InvoicePreview />
          </div>

          {/* Right panel - scrollable details */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Top row: internal notes + invoice summary */}
            <div className="grid grid-cols-1 gap-4">
              <InternalNotes />
              <InvoiceSummary />
            </div>

            {/* Credit note history */}
            <CreditNoteHistory />

            {/* Activity log */}
            <ActivityLog />
          </div>
        </div>
      </div>
    </div>
  );
}
