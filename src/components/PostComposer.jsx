import { useState } from "react";

function PostComposer() {
  const [platform, setPlatform] = useState("Twitter");
  const [post, setPost] = useState("");

  const limit = platform === "Twitter" ? 280 : 3000;
  const isExceeded = post.length > limit;

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  const handlePostChange = (event) => {
    setPost(event.target.value);
  };

  return (
    <section className="composer">
      <h1>Post Composer</h1>
      <p className="subtitle">
        Create and validate posts for Twitter or LinkedIn.
      </p>

      <label htmlFor="platform">Select Platform</label>
      <select
        id="platform"
        value={platform}
        onChange={handlePlatformChange}
      >
        <option value="Twitter">Twitter</option>
        <option value="LinkedIn">LinkedIn</option>
      </select>

      <label htmlFor="post">Write your post</label>
      <textarea
        id="post"
        rows="10"
        value={post}
        onChange={handlePostChange}
        placeholder="Type your post here..."
        aria-invalid={isExceeded}
      />

      <div className={`counter ${isExceeded ? "error-text" : ""}`}>
        Characters: {post.length} / {limit}
      </div>

      {isExceeded && (
        <p className="error-message" role="alert">
          Error: Your post exceeds the {platform} character limit by{" "}
          {post.length - limit} characters.
        </p>
      )}

      {!isExceeded && (
        <p className="status-message">
          Your post is within the {platform} character limit.
        </p>
      )}
    </section>
  );
}

export default PostComposer;
