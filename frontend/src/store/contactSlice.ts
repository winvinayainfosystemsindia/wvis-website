import { createSubmissionSlice } from './createSubmissionSlice';
import { submitContactForm } from '../services/contactService';
import { listAllContacts, setContactProcessed, deleteContact } from '../services/adminContactService';
import type { ContactFormValues, ContactResponse } from '../models/contact';

const contactSubmissionSlice = createSubmissionSlice<ContactResponse, ContactFormValues>({
	name: 'contacts',
	submit: submitContactForm,
	fetchAdmin: listAllContacts,
	setProcessed: setContactProcessed,
	remove: deleteContact,
});

export const {
	submit: submitContactThunk,
	fetchAdmin: fetchContactsAdmin,
	setProcessed: setContactProcessedThunk,
	remove: removeContactThunk,
} = contactSubmissionSlice.thunks;

export const { resetSubmitStatus: resetContactSubmitStatus } = contactSubmissionSlice.actions;

export default contactSubmissionSlice.reducer;
