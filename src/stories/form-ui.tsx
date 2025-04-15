import { FormEventHandler } from "react";

export type FormInputProps = {
    fullname: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export default function FormUI() {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (formInput) => {
        formInput.preventDefault();
        console.dir("Full Name:", formInput.currentTarget.fullname.value);
        console.dir("Email:", formInput.currentTarget.email.value);
        console.dir("Password:", formInput.currentTarget.password.value);
        console.dir(
            "Confirm Password:",
            formInput.currentTarget["confirm-password"].value
        );
    };
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullname">Full Name</label>
                        <input
                            className="border rounded-lg"
                            type="text"
                            id="fullname"
                            name="fullname"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            className="border rounded-lg"
                            type="email"
                            id="email"
                            name="email"
                        />
                        <p>Email is already taken</p>
                    </div>
                    <div>
                        <label htmlFor="password">Enter Password</label>
                        <input
                            className="border rounded-lg"
                            type="password"
                            id="password"
                            name="password"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            className="border rounded-lg"
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                        />
                    </div>
                    <button>Update Profile</button>
                </form>
            </div>
        </div>
    );
}
