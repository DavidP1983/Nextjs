import Heading from "./Heading";

const ContactInfo = ({
    contact
}: any) => {
    const { name, email, address } = contact || {};
    const { street, suite, city, zipcode } = address || {};

    //Если contact не существует, то возвращаем сообщение
    if (!contact) {


        // @ts-expect-error TS(2749): 'Heading' refers to a value, but is being used as ... Remove this comment to see the full error message
        return <Heading tag="h3" text="Empty Contact" />
    }

    return (
        <>


            // @ts-expect-error TS(2749): 'Heading' refers to a value, but is being used as ... Remove this comment to see the full error message
            <Heading tag="h3" text={name} />


            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div>


                // @ts-expect-error TS(2552): Cannot find name 'strong'. Did you mean 'string'?
                <strong> Email: </strong>
                {email}
            </div>


            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div>


                // @ts-expect-error TS(2552): Cannot find name 'strong'. Did you mean 'string'?
                <strong> Address: </strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>
    );
}

export default ContactInfo;