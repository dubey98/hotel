import React from "react";

function TagList({ tags }) {
  return (
    <div className="text-xs flex space-x-1">
      {tags.map((tag, index) => {
        return (
          <div className="border-2 px-2 py-1 rounded-full" key={index}>
            {tag}
          </div>
        );
      })}
    </div>
  );
}

export default TagList;
