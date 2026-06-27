
import { Clock, Contact, FolderClosed, Heart, Import, Layers2, Printer, Trash2, Upload } from "lucide-react";

type Menu = {
  header: string,
  items: MenuItem[]
}

type MenuItem = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  iconColor?: string;
};

export const CONTACT_SIDEBAR_MENU_ITEMS:Menu[] = [
  {
    header: "My Contacts",
    items: [
      {icon: Contact,label: "All Contacts"},
      { icon: Heart, label: "Favorites" },
      { icon: Clock, label: "Frequently Contacted" },
      { icon: Layers2, label: "Duplicates" },
      { icon: Trash2, label: "Deleted Contacts" },
    ],
  },
  {
    header: "Groups",
    items: [
      {icon: FolderClosed,label: "Most Important",iconColor: "#10b981"},
      { icon: FolderClosed, label: "Work",iconColor: '#f59e0b'},
      { icon: FolderClosed, label: "Family" ,iconColor:'#3b82f6'},
      { icon: FolderClosed, label: "Projects",iconColor:'#ef4444' },
      { icon: FolderClosed, label: "Recent Leads",iconColor:'#d946ef' },
    ],
  },
  {header:'Actions',
    items:[ {icon: Import,label: "Import"},
      { icon: Upload, label: "Export" },
      { icon: Printer, label: "Print" },]
  }
  
];