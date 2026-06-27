import {
  Search,
  Info,
  Settings,
  CircleEllipsis,
  Plus,
  Command,
} from 'lucide-react';

const ContactHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-row items-center">
        <h3 className="text-sm font-medium ml-3 mr-8">Contacts</h3>
        <div
          className="relative w-full max-w-md flex items-center min-w-sm
"
        >
          <input
            type="text"
            placeholder="Search Contacts..."
            className="
      w-full
      rounded-full
      border
      border-primaryColor/20
      backdrop-blur-xl
      py-1.75
      ps-10
      pe-10
      text-primaryColor
      placeholder:text-primaryColor
      placeholder:text-sm
      outline-none
      transition-all
      focus:border-white
      focus:ring-4
      focus:ring-white/20
    "
          />

          {/* Start Icon */}
          <Search className="absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primaryColor" />

          {/* End Icon */}
          <div className="absolute flex flex-row justify-center items-center gap-1 right-4 h-fit w-fit text-primaryColor pointer-events-none text-sm">
            <Command className="w-4" />
            <span>K</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 px-4">
        <Info className="w-5 h-5" />
        <Settings className="w-5 h-5" />
        <CircleEllipsis className="w-5 h-5" />
        <button
          className="
    flex items-center justify-center
    gap-2
    rounded-full
    border border-blue-500
    px-4 py-2
    text-blue-500
    transition-all duration-300
    hover:ring-4
    hover:ring-blue-500/10
    cursor-pointer
    text-sm
  "
        >
          <Plus className="w-4 h-4" />
          Create Contact
        </button>
      </div>
    </div>
  );
};

export default ContactHeader;
