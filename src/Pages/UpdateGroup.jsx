import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const UpdateGroup = () => {
  const { user } = use(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const groupData = useLoaderData();

  const categories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
  ];
  return (
    <div>
      <h1 className="text-center text-7xl font-bold my-10">Create Group</h1>

      <form onSubmit={handleUpdateGroup}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[1440px] mx-auto border p-4 mb-20">
          <label className="label">Group Title</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Group Name"
            name="title"
          />

          <label className="label">Category</label>
          <div className="dropdown w-full">
            <div tabIndex={0} role="button" className="btn w-full m-1">
              {selectedCategory || "Click Here to Select Your Desired Hobby"}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-full p-2 shadow"
            >
              {categories.map((cat, index) => (
                <li key={index}>
                  <a
                    onClick={() => setSelectedCategory(cat)}
                    className="cursor-pointer"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <input type="hidden" name="category" value={selectedCategory} />

          <label className="label">Description</label>
          <textarea
            name="description"
            className="textarea w-full"
            placeholder="Bio"
          ></textarea>

          <label className="label">Meeting Location</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Meeting Location"
            name="location"
          />

          <label className="label">Max Members</label>
          <input
            type="number"
            className="input w-full"
            placeholder="Max Members"
            name="max_members"
          />

          <label className="label">Start Date</label>
          <input
            type="date"
            className="input w-full"
            name="date"
            placeholder="Date"
          />

          <label className="label">Image URL</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Image URL"
            name="photo"
          />

          <label className="label">User Name</label>
          <input
            type="text"
            defaultValue={user?.displayName}
            className="input w-full"
            placeholder="Name"
            name="name"
          />

          <label className="label">User Email</label>
          <input
            type="email"
            defaultValue={user?.email}
            className="input w-full"
            placeholder="email"
            name="email"
          />

          <button className="btn w-full mt-5">Update Group</button>
        </fieldset>
      </form>

      {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[1440px] mx-auto border p-4">
          <input type="text" className="input" placeholder="My awesome page" />
          <p className="label">
            You can edit page title later on from settings
          </p>
        </fieldset> */}

      {/* <div className="w-[1440px] mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input w-full"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default UpdateGroup;
