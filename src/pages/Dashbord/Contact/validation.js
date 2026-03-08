import { object, string,} from 'yup';

const required_message = "zorunlu alan" //kendimizde mesaj tanımlayabiliriz

const contactSchema = object({
  firstName: string().required(required_message),
  lastName: string().required(),
  email: string().email().required(),
  message: string().min(5).required(),
});

export default contactSchema;