import { useLoaderData, redirect } from "react-router-dom";
import { deleteContact, getContacts } from "../contacts.js";

export async function action({request, params}){
    const contactId = params.contactId;
    await deleteContact(contactId);
    return redirect(`/`);
}

export function loader({ params }){
    const contacts = getContacts(params.contactId);
    return contacts
}

export default function Destroy(){
    const contact = useLoaderData();   
    console.log(contact, 'contact')
    return(
        <h2>{`${contact} was succesfully eliminated`}</h2>
    )
}