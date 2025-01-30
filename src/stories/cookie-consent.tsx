import { useState, useEffect } from "react";

export default function CookieConsent() {
    const [cookieState, setCookieState] = useState(false);

    useEffect(() => {
        const storageItem = localStorage.getItem("CookieState") === "true";
        setCookieState(storageItem);
    }, []);

    const acceptCookies = () => {
        setCookieState(true);
        localStorage.setItem("cookieConsent", "true");
    };

    if (cookieState) return null;

    return (
        <div>
            <div className="bg-black rounded-lg flex flex-col items-center gap-2 w-1/4 p-4">
                <p className="text-white text-xl">
                    We use cookies to improve your user experience.
                </p>
                <button
                    className="p-2 px-4 rounded-lg bg-white text-center text-xl cursor-pointer"
                    onClick={() => {
                        acceptCookies();
                    }}
                >
                    I like Cookies
                </button>
            </div>
        </div>
    );
}
