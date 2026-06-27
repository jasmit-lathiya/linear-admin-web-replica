import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowDownAZ } from "lucide-react";
import { CONTACTS } from "../../../../constants/contacts";
import { useEffect } from "react";

const ContactList = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("contact");

  useEffect(() => {
    if (!id) {
      navigate("/contacts?contact=1");
    }
  }, []);

  return (
    <div className="flex-1 w-full flex flex-col h-full overflow-y-auto">
      <div className="flex flex-row justify-between items-center py-2 px-4">
        <h4>All Contacts</h4>
        <ArrowDownAZ className="w-4 h-4 cursor-pointer" />
      </div>

      <div className="flex flex-col h-full overflow-y-auto gap-1">
        {CONTACTS.map((contactData, index) => {
          return (
            <div
              key={index}
              className={`flex flex-row gap-2 p-2 rounded-lg cursor-pointer hover:bg-highlight ${index + 1 === Number(id) && "bg-selected"}`}
              onClick={() =>
                navigate("/contacts?contact=" + (index + 1), { replace: true })
              }
            >
              <div className=" w-10 h-10 rounded-full">
                {contactData.imgSrc ? (
                  <img
                    src={contactData.imgSrc}
                    alt="Profile Picture"
                    className="rounded-full"
                  />
                ) : (
                  <span
                    className="flex justify-center items-center w-full h-full rounded-full text-white"
                    style={{ backgroundColor: contactData.color }}
                  >
                    {contactData.name[0]}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-md">{contactData.name}</span>
                <span className="text-xs text-secondaryColor">
                  {contactData.email}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactList;
