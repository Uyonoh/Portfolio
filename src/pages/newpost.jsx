import { useState } from "react";
import axios from "axios";

function PostForm() {
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        section: "",
        content: "",
        thumbnail: null,
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, thumbnail: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const form = new FormData();
        form.append("title", formData.title);
        form.append("subtitle", formData.subtitle);
        form.append("section", formData.section);
        form.append("content", formData.content);
        if (formData.thumbnail) {
            form.append("thumbnail", formData.thumbnail);
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/posts/",
                form,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Token ${localStorage.getItem("token")}`, // Include authentication token if required
                    },
                }
            );
            setMessage("Post created successfully!");
        } catch (error) {
            console.error("Error submitting post:", error);
            setMessage("Failed to create post.");
        }
    };

    return (
        <div>
            <h2>Create a New Post</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>
                    Title:
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Subtitle:
                    <input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Section:
                    <input type="text" name="section" value={formData.section} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Content:
                    <textarea name="content" value={formData.content} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Thumbnail:
                    <input type="file" name="thumbnail" onChange={handleFileChange} accept="image/*" />
                </label>
                <br />
                <button type="submit">Submit Post</button>
            </form>
        </div>
    );
}

export default PostForm;
