import { ShoppingBag,Contact,Earth,SquareKanban,AtSign,CircleUserRound,FolderClosed, SquareUser, Mail, MessageCircle, CircleCheckBig, Calendar, PanelTop, Type, FileText, ChartPie, Component } from "lucide-react";

export const SIDEBAR_MENU_ITEMS = [
  {
    header: "Dashboards",
    items: [
      {
        icon: ShoppingBag,
        label: "E-Commerce",
      },
      { icon: Contact, label: "CRM" },
      { icon: Earth, label: "Analytics" },
      { icon: SquareKanban, label: "Project Management" },
      { icon: AtSign, label: "Email Marketing" },
    ],
  },
  {
    header: "Application Views",
    items: [
      {
        icon: CircleUserRound,
        label: "User",
        list: ["Profile", "Timeline", "Connection"],
      },
      { icon: FolderClosed, label: "File Manager" },
      { icon: SquareUser, label: "Contacts" },
      { icon: Mail, label: "Mail" },
      { icon: MessageCircle, label: "Messages" },
      { icon: CircleCheckBig, label: "Todo Lists" },
      { icon: Calendar, label: "Calendar" },
    ],
  },
  {
    header: "Miscellaneous",
    items: [
      {
        icon: PanelTop,
        label: "Sample Pages",
        list: [
          "Invoice",
          "Pricing Table",
          "Search Results",
          "FAQ",
          "Teams",
          "Login",
          "Register",
          "Forget Password",
          "Coming Soon",
          "Error",
        ],
      },
      {
        icon: Type,
        label: "Content",
        list: ["Typography", "Icons", "Tables"],
      },
      { icon: FileText, label: "Form" },
      { icon: Component, label: "Components" },
      { icon: ChartPie, label: "Charts" },
    ],
  },
];