import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should sign in.</div>;
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h className="text-xl font-light">Create a New Post</h>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button
          type="button"
          className="w-max p-2 shadow-md text-sm text-gray-500 bg-white"
        >
          Add a cover image
        </button>
        <input
          type="text"
          placeholder="Write a Title That Captures Minds"
          className="text-4xl font-semibold bg-transparent outline-none focus:ring-0"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="category" className="text-sm">
            Choose a category:
          </label>
          <select
            name="cat"
            id="category"
            className="rounded-xl p-2 bg-white shadow-md"
          >
            <option value="kenyan-culture">Kenyan Culture</option>
            <option value="social-commentary">Social Commentary</option>
            <option value="humor-and-satire">Humor & Satire</option>
            <option value="global-perspectives">Global Perspectives</option>
            <option value="personal-stories">Personal Stories</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="A Short Description"
          className="rounded-xl p-4 bg-white shadow-md outline-none focus:ring-0"
        ></textarea>
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md"
        />
        <button
          type="submit"
          className="bg-blue-800 text-white py-2 px-4 rounded-xl font-medium mt-1 w-max"
        >
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default Write;
