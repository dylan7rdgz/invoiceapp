"use client";

import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Palette,
  DollarSign,
  BarChart3,
  Truck,
  Users,
  TrendingUp,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Package, label: "Products" },
  { icon: ShoppingCart, label: "Orders", active: true },
  { icon: Palette, label: "Design" },
  { icon: DollarSign, label: "Finance" },
  { icon: BarChart3, label: "Stocks" },
  { icon: Truck, label: "Shipments" },
  { icon: Users, label: "Customers" },
  { icon: TrendingUp, label: "Insights" },
];

export default function Sidebar() {
  return (
    <div className="w-[200px] min-w-[200px] bg-[#1a1a2e] flex flex-col h-full">
      {/* Logo */}
      <div className="px-4 py-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">B</span>
            </div>
            <span className="text-white font-semibold text-sm">Brandhub</span>
          </div>
          <div className="w-4 h-4 bg-white/20 rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-white/60 rounded-sm" />
          </div>
        </div>
        <p className="text-[#7c7cae] text-[10px] mt-1 ml-9">Dashboard</p>
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`flex items-center gap-3 px-4 py-2 mx-2 rounded-md cursor-pointer transition-colors ${
                item.active
                  ? "bg-[#2a2a4a] text-white"
                  : "text-[#8888b0] hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon size={14} className={item.active ? "text-white" : "text-[#8888b0]"} />
              <span className="text-xs font-medium">{item.label}</span>
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-white/10">
        <p className="text-[#4a4a6a] text-[9px]">Powered by</p>
        <p className="text-[#6a6a9a] text-[10px] font-semibold">Brandhub</p>
      </div>
    </div>
  );
}
