import { useNavigate, useSearchParams } from 'react-router-dom';
import { CONTACTS } from '../../../../constants/contacts';
import ContactDetailRow from '../../molecules/contactDetailRow';
// import ProfileIcon from "../../../../assets/icons/profile.svg";
import {
  CircleMinus,
  Edit,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Smartphone,
  StickyNote,
} from 'lucide-react';

const ContactDetail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get('contact');

  if (!id) {
    return;
  }
  const contactDetail = CONTACTS[Number(id) - 1];
  return (
    <div className="w-full h-full flex-2 flex flex-col justify-center items-center p-2 gap-8">
      <div className="w-full flex flex-row justify-end text-sm">
        <div className="flex flex-row justify-center items-center gap-2 hover:bg-selected p-2 rounded-sm cursor-pointer">
          <Edit className="w-4 h-4" />
          Update
        </div>
        <div className="flex flex-row justify-center items-center gap-2 hover:bg-selected py-2 px-4 rounded-sm cursor-pointer">
          <CircleMinus className="w-4 h-4" />
          Delete
        </div>
      </div>
      <div className="h-full w-full overflow-y-auto flex justify-center">
        <div className="flex flex-col h-fit bg-blurColor backdrop-blur-md  rounded-lg p-2 max-w-xl">
          <div className="flex flex-col justify-center items-center p-8 bg-highlight/80 rounded-lg gap-2">
            {contactDetail.imgSrc ? (
              <img
                src={contactDetail.imgSrc}
                className="w-32 h-32 rounded-full"
              />
            ) : (
              // <img src={ProfileIcon} className="w-32 h-32 rounded-full z-5 text-red-500" />
              // <ProfileIcon />
              <div className="w-32 h-32 rounded-full bg-selected text-6xl flex items-center justify-center">
                {contactDetail.name[0]}
              </div>
            )}
            <span className="font-medium">{contactDetail.name}</span>
            <span className="">{contactDetail.role}</span>
          </div>
          <div className="flex flex-col gap-6 py-4 mt-4">
            {contactDetail?.mobilePhone && (
              <ContactDetailRow
                label="Mobile Phone"
                value={contactDetail.mobilePhone}
                Icon={Smartphone}
              />
            )}
            {contactDetail?.homePhone && (
              <ContactDetailRow
                label="Home Phone"
                value={contactDetail.homePhone}
                Icon={Phone}
              />
            )}
            {contactDetail?.email && (
              <ContactDetailRow
                label="Email Address"
                value={contactDetail.email}
                Icon={Mail}
              />
            )}
            {contactDetail?.message && (
              <ContactDetailRow
                label="Message"
                value={contactDetail.message}
                Icon={MessageSquare}
              />
            )}
            {contactDetail?.address && (
              <ContactDetailRow
                label="Address"
                value={contactDetail.address}
                Icon={MapPin}
              />
            )}
            {contactDetail?.notes && (
              <ContactDetailRow
                label="Notes"
                value={contactDetail.notes}
                Icon={StickyNote}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
