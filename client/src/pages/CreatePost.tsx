import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormField, Loader } from "../components";
import { getRandomPrompt } from "../utils";
import { preview } from "../assets";

const CreatePost = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [generatingImage, setGeneratingImage] = useState(false);
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSurprise = () => {
    setForm((prev) => ({
      ...prev,
      prompt: getRandomPrompt(),
    }));
  };

  const generateImage = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p>
          Create imaginative and visually stunning images through DALL-E AI and
          share with the community.
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            label="Name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            name="name"
          />
          <FormField
            label="Prompt"
            type="text"
            placeholder="Enter your prompt"
            value={form.prompt}
            onChange={handleChange}
            name="prompt"
            isSurprise
            handleSurprise={handleSurprise}
          />
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}
            {generatingImage && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <Button
            onClick={generateImage}
            className="text-white bg-green-700"
            label={generatingImage ? "Generating..." : "Generate"}
          />
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">
            ** Once you have created the image you want, you can share it with
            others in the community **
          </p>
          <Button
            type="submit"
            label={loading ? "Sharing..." : "Share with the Community"}
            className="mt-3 text-white bg-[#6469ff]"
          />
        </div>
      </form>
      <div className="mt-10"></div>
    </section>
  );
};

export default CreatePost;
