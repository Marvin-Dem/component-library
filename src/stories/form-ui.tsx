import { FormEventHandler, useState } from "react";

export default function FormUI() {
    const [passwordError, setPasswordError] = useState<string>();
    const [confirmPasswordError, setConfirmPasswordError] = useState<string>();

    const handleSubmit: FormEventHandler<HTMLFormElement> = (formInput) => {
        formInput.preventDefault();
        const fullname = formInput.currentTarget.fullname.value;
        const email = formInput.currentTarget.email.value;
        const password: string = formInput.currentTarget.password.value;
        const confirmPassword =
            formInput.currentTarget["confirm-password"].value;

        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters long.");
        } else {
            setPasswordError(undefined);
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match!");
        } else {
            setConfirmPasswordError(undefined);
        }

        if (password.length >= 8 && password === confirmPassword) {
            console.table([fullname, email, password, confirmPassword]);
        }
    };
    return (
        <div>
            <div className="border-2 rounded-lg p-4 w-1/3">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <div className="grid grid-cols-2">
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                className="border rounded-lg"
                                type="text"
                                id="fullname"
                                name="fullname"
                            />
                        </div>
                        <div className="grid grid-cols-2">
                            <label htmlFor="email">Email</label>
                            <input
                                className="border rounded-lg"
                                type="email"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className="grid grid-cols-2">
                            <label htmlFor="password">Enter Password</label>
                            <input
                                className={`border rounded-lg ${
                                    passwordError ? "border-red-500" : ""
                                }`}
                                type="password"
                                id="password"
                                name="password"
                            />
                            {passwordError && (
                                <p className="text-red-500 col-span-2">
                                    {passwordError}
                                </p>
                            )}
                        </div>
                        <div className="grid grid-cols-2">
                            <label htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <input
                                className={`border rounded-lg ${
                                    confirmPasswordError ? "border-red-500" : ""
                                }`}
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                            />
                            {confirmPasswordError && (
                                <p className="text-red-500 col-span-2">
                                    {confirmPasswordError}
                                </p>
                            )}
                        </div>
                    </div>
                    <button className="p-2 bg-black text-white text-lg rounded-lg cursor-pointer">
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
}
