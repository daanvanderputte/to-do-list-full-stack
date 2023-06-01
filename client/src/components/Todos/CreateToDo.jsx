import React, { useState } from "react";
import axios from 'axios';

function createToDo() {
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            await axios.post(`/api/todos/create`, formData)
        }
    }
}