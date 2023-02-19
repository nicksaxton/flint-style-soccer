import { saveVolunteer } from '$lib/cms';
import type { Volunteer } from '$lib/types';
import type { Actions } from './$types';

const validate = (volunteer: Volunteer) => {
	const errors: Record<string, string> = {};

	if (!volunteer.firstName) {
		errors.firstName = 'Required';
	}

	if (!volunteer.lastName) {
		errors.lastName = 'Required';
	}

	if (!volunteer.email) {
		errors.email = 'Required';
	} else if (
		!/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(volunteer.email)
	) {
		errors.email = 'Invalid email address';
	}

	if (!volunteer.phone) {
		errors.phone = 'Required';
	} else if (!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(volunteer.phone)) {
		errors.phone = 'Invalid phone number';
	}

	if (!volunteer.shirtSize) {
		errors.shirtSize = 'Required';
	} else if (!['XS', 'S', 'M', 'L', 'XL', '2XL'].includes(volunteer.shirtSize)) {
		errors.shirtSize = 'Invalid shirt size';
	}

	return errors;
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const firstName = data.get('firstName') as string;
		const lastName = data.get('lastName') as string;
		const email = data.get('email') as string;
		const phone = data.get('phone') as string;
		const shirtSize = data.get('shirtSize') as string;

		const volunteer = {
			firstName,
			lastName,
			email,
			phone,
			shirtSize
		};

		const errors = validate(volunteer);

		if (Object.keys(errors).length >= 1) {
			return { success: false, errors, volunteer };
		}

		try {
			await saveVolunteer({
				firstName,
				lastName,
				email,
				phone,
				shirtSize
			});

			return { success: true };
		} catch (error) {
			console.error('Error saving volunteer data', error);
			return { success: false, volunteer };
		}
	}
};
