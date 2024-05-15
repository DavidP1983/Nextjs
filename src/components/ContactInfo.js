import Heading from "./Heading";

const ContactInfo = ({ contact }) => {
    const { name, email, address } = contact || {};
    const { street, suite, city, zipcode } = address || {};

    //Если contact не существует, то возвращаем сообщение
    if (!contact) {
        return <Heading tag="h3" text="Empty Contact" />
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
}

export default ContactInfo;