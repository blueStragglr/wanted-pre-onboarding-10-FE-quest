"use client";
import "./style.css";
import React, { useState } from "react";

export default function page() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    function submitHandler(e) {
        e.preventDefault();
        if (!id || !password) return;
        console.log("id", id);
        console.log("password", password);
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                <span>id</span>
                <input
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    type="text"
                    placeholder="Enter your id..."
                />
            </label>
            <label>
                <span>password</span>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter your password..."
                />
            </label>
            <button disabled={!id || !password} type="submit">
                Submit
            </button>
        </form>
    );
}
