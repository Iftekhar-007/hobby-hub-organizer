import React from "react";
import { Link } from "react-router";

const Group = ({ group }) => {
  return (
    <div className="">
      <div className="overflow-x-auto border-2 mb-5 rounded-2xl p-5">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr className="flex flex-row items-center justify-between">
              <div className="lg:w-[360px]">
                <td className="">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={group.photo} alt="Group Cover Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{group.title}</div>
                      <div className="text-sm opacity-50">{group.name}</div>
                    </div>
                  </div>
                </td>
              </div>
              <div className="lg:w-[360px]">
                <div className="text-left">
                  <b>Location:</b>
                </div>
                <div className="text-left">{group.location}</div>
              </div>
              <div className="lg:w-[360px]">
                <div>
                  <b>Categery</b>
                </div>
                <div>Purple</div>
              </div>
              <div className="">
                <th>
                  <Link
                    to={`/allgroups/${group._id}`}
                    className="btn btn-ghost btn-xs"
                  >
                    Read More
                  </Link>
                </th>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Group;
