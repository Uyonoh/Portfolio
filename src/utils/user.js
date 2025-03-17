import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";

const CurrentUser = function () {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( function() {
        const fetchUser = async function() {
            try {
                const response = await fetch("http://localhost:8000/api/auth/user/",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Token ${localStorage.getItem("token")}`,
                        },
                        credentials: "include",
                        'Access-Control-Allow-Credentials': 'true',
                    }
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch user");
                }
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Error fetching user", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) return "Loading...";
    if (!user) return "No user";
    return `${user.username}`;
}

export default CurrentUser;