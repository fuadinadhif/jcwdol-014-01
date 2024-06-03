import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState({ id: null, title: "", views: 0 });

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("http://localhost:3000/posts");
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  async function handleAdd(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:3000/posts", {
        ...content,
        id: uuidv4(),
      });

      setPosts([...posts, data]);
      setContent({ id: null, title: "", views: 0 });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      const newPosts = posts.filter((post) => post.id !== id);
      setPosts(newPosts);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`posts/${post.id}`}>
            <h1>{post.title}</h1>
          </Link>
          <p>{post.views}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}

      <hr />

      <form
        onSubmit={handleAdd}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={content.title}
          onChange={(e) => setContent({ ...content, title: e.target.value })}
        />

        <label htmlFor="views">Views</label>
        <input
          type="number"
          id="views"
          value={content.views}
          onChange={(e) => setContent({ ...content, views: e.target.value })}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
