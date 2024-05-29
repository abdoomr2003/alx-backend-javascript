import {uploadPhoto, createUser} from './utils';

export default async function handleProfileSignup() {
  const upload = uploadPhoto();
  const create = createUser();
  try {
        const result_2 = await Promise.all([upload, create]);
        console.log(
            `${result_2[0].body} ${result_2[1].firstName} ${result_2[1].lastName}`
        );
    } catch {
        console.log('Signup system offline');
    }
}
