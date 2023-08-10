import React, { useState } from "react";

type Props = {};

const InputTodo = (props: Props) => {
	const [description, setDescription] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const body = { description };

			const response = await fetch("http://localhost:5000/todos", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			});

			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h1 className='text-center mt-5'>Pern Todo List</h1>

			<form className='d-flex mt-5' onSubmit={handleSubmit}>
				<input
					type='text'
					className='form-control'
					value={description}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setDescription(e.target.value)
					}
				/>

				<button type='submit' className='btn btn-success'>
					Add
				</button>
			</form>
		</>
	);
};

export default InputTodo;
