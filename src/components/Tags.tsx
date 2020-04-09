import React from "react";
import { useState } from "react";

interface Props {
  selectedTags: (newTags: string[]) => void;
  initTags: string[];
}
const Tags: React.FC<Props> = ({ selectedTags, initTags }) => {
  const [tags, setTags] = useState<string[]>([]);

  React.useEffect(() => {
    setTags([...initTags]);
  }, [initTags]);

  const removeTags = (indexToRemove: number) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event: any) => {
    if (tags.length > 10) alert("Вы не можете добавить более 10 записей!");
    else if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <div className="tags-input">
      <ul id="tags">
        {tags.map((tag: string, index: number) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <span className="tag-close-icon" onClick={() => removeTags(index)}>
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
        placeholder="Нажмите Enter, чтобы добавить тег"
      />
    </div>
  );
};
export default Tags;
