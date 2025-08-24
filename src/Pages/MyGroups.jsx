import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const MyGroups = () => {
  const initialGroups = useLoaderData();
  const { email } = useParams();
  // const navigate = useNavigate();

  const [groups, setGroups] = useState(initialGroups);

  useEffect(() => {
    document.title = "MyGroups | HobbyHub";

    const setFavicon = (url) => {
      let link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/png";
      link.rel = "icon";
      link.href = url;
      document.head.appendChild(link);
    };
    setFavicon("/man.png");
  }, []);

  const handleDelete = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(
          `https://hobby-hub-server-lilac.vercel.app/groups-by-email/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainningCoffee = groups.filter(
                (group) => group._id !== id
              );
              setGroups(remainningCoffee);
              // console.log(result);
            }
            // console.log("after delete", data);
          });
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
        // console.log(result);
      }
    });
  };

  // const handleView = (id) => {
  //   navigate(`/allgroups/${id}`);
  // };

  return (
    <div className="p-6 lg:w-[1440px] mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        My Created Groups ({groups.length})
      </h1>

      {groups.length === 0 ? (
        <p className="text-gray-600">You haven't created any groups yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300 shadow">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2">Photo</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Max Members</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <tr key={group._id} className="border-t">
                  <td className="px-4 py-2">
                    <img
                      src={group.photo}
                      alt={group.title}
                      className="w-20 h-14 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 font-semibold">{group.title}</td>
                  <td className="px-4 py-2">{group.category}</td>
                  <td className="px-4 py-2">{group.date}</td>
                  <td className="px-4 py-2">{group.location}</td>
                  <td className="px-4 py-2 space-x-2 flex flex-row justify-end items-center">
                    <Link
                      to={`/allgroups/${group._id}`}
                      // onClick={() => handleView(group._id)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      View
                    </Link>
                    <Link
                      to={`/updategroup/${group._id}`}
                      // onClick={() => handleUpdate(group._id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded btn"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(group._id)}
                      className=" btn bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyGroups;
