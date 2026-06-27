import { Clipboard, type LucideIcon } from 'lucide-react';

interface ContactDetailRowProps {
  label: string;
  value: string;
  Icon: LucideIcon;
}
const ContactDetailRow = ({ label, Icon, value }: ContactDetailRowProps) => {
  return (
    <div className="flex flex-row gap-6 px-4 min-w-md">
      <div className="rounded-full bg-highlight w-10 h-10 flex justify-center items-center ">
        <Icon className="w-4 h-4 text-primaryLightColor" />
      </div>
      <div className="flex-1 flex flex-row  pb-3 border-b border-highlight">
        <div className="flex-1 flex flex-col">
          <span className="text-secondaryColor text-xs">{label}</span>
          <span className="text-primaryLightColor">{value}</span>
        </div>
        <div className="h-fit hover:bg-highlight p-2 cursor-pointer rounded-md hover:ring-4 ring-white/20">
          <Clipboard className="w-4 h-4 text-primaryLightColor" />
        </div>
      </div>
    </div>
  );
};

export default ContactDetailRow;
