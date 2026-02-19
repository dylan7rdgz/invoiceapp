"use client";

const activityLogs = [
  {
    user: "Sandeep Maurya",
    action: 'has send an email to customer that "XXX"',
    time: "22nd June, 2024, 12:35 PM CEST",
    color: "bg-orange-500",
  },
  {
    user: "Sandeep Maurya",
    action: 'has send an email to customer that "XXX"',
    time: "22nd June, 2024, 12:36 PM CEST",
    color: "bg-blue-500",
  },
  {
    user: "Sandeep Maurya",
    action: 'has send an email to customer that "XXX"',
    time: "22nd June, 2024, 12:36 PM CEST",
    color: "bg-emerald-500",
  },
  {
    user: "Sandeep Maurya",
    action: 'has send an email to customer that "XXX"',
    time: "22nd June, 2024, 12:36 PM CEST",
    color: "bg-purple-500",
  },
  {
    user: "Sandeep Maurya",
    action: 'has send an email to customer that "XXX"',
    time: "22nd June, 2024, 12:36 PM CEST",
    color: "bg-red-500",
  },
];

export default function ActivityLog() {
  return (
    <div className="border border-gray-200 rounded-lg bg-white">
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-800">Activity log</h2>
      </div>
      <div className="px-4 py-3 space-y-3">
        {activityLogs.map((log, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className={`w-4 h-4 rounded-full flex-shrink-0 mt-0.5 ${log.color}`}
            />
            <div>
              <p className="text-[10px] text-gray-700">
                <span className="font-medium">{log.user}</span> {log.action}
              </p>
              <p className="text-[9px] text-gray-400">{log.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
