import Heading from "./Heading";
import { IContactType } from "../shared/interfaces/types";

type ContatcInfoType = {
  contact: IContactType
}


const ContactInfo = ({ contact }: ContatcInfoType) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  //Если contact не существует, то возвращаем сообщение
  if (!contact) {
    return <Heading tag="h3" text="Empty Contact" />;
  }

  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <strong> Email: </strong>
        {email}
      </div>
      <div>
        <strong> Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
};

export default ContactInfo;
