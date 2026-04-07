import { TContact } from "./contact.interface";
import { Contact } from "./contact.modal";

export const createContact = async (payload: TContact) => {
  const result = await Contact.create(payload);
  return result;
};

export const getAllContacts = async () => {
  const result = await Contact.find();
  return result;
};

export const getContactBySlug = async (slug: string) => {
  const result = await Contact.findOne({ slug });
  return result;
};

export const updateContact = async (slug: string, payload: TContact) => {
  const result = await Contact.findOneAndUpdate({ slug }, payload, { new: true });
  return result;
};

export const deleteContact = async (slug: string) => {
  const result = await Contact.findOneAndDelete({ slug });
  return result;
};
