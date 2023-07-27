import { useForm, SubmitHandler } from 'react-hook-form';
import css from './index.module.css';

type Inputs = {
	example: string;
	exampleRequired: string;
};

export const Footer = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return <footer className={css.footer}>Footer</footer>;
};
