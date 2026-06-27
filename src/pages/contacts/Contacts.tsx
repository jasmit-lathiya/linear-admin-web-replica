import ContactDetail from './organisms/contactDetail';
import ContactHeader from './organisms/contactHeader';
import ContactList from './organisms/contactList';
import ContactSidebar from './organisms/contactSidebar';

const Contacts = () => {
  return (
    <div className="flex flex-col h-full gap-3 overflow-hidden">
      <ContactHeader />
      <div className="flex-1 h-full overflow-hidden flex flex-row backdrop-blur-2xl border border-highlight rounded-xl p-1">
        <ContactSidebar />
        <ContactList />
        <ContactDetail />
        {/* <div>A</div>
        <div>B</div>
        <div>C</div> */}
      </div>
    </div>
  );
};

export default Contacts;
