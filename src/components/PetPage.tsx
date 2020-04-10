import * as React from "react";
import Tags from "./Tags";
import { Status } from "types/Pet";
import HomeContext from "../context/HomeContext";
import { objPetInfo } from "../constants/creaters";
import { useHistory } from "react-router-dom";

const PetPage: React.FC = () => {
  const [petId, setPetId] = React.useState<string>("");
  const [category, setCategory] = React.useState("");
  const [name, setName] = React.useState("");
  const [urls, setUrls] = React.useState<string[]>([]);
  const [tags, setTags] = React.useState<string[]>([]);
  const [status, setStatus] = React.useState<Status>("available");
  const [isValid, setValid] = React.useState(true);
  const [addMode, setAddMode] = React.useState(false);
  const history = useHistory();

  const { editablePet, addPet, updatePet, deletePet } = React.useContext(
    HomeContext
  );

  React.useEffect(() => {
    if (editablePet !== undefined && !addMode) {
      setPetId(String(editablePet?.id));
      setCategory(editablePet.category.name);
      setName(editablePet.name);
      setUrls(editablePet.photoUrls);
      editablePet.tags.map((item) => {
        setTags([...tags, item.name]);
      });
      setStatus(editablePet.status);
    }
  }, [addMode]);

  const selectedTags = (newTags: string[]) => {
    setTags(newTags);
  };

  const selectedUrls = (photoUrls: string[]) => {
    setUrls(photoUrls);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "category":
        setCategory(event.target.value);
        break;
      case "name":
        setName(event.target.value);
        break;
      case "status":
        if (
          event.target.value == "available" ||
          event.target.value == "pending" ||
          event.target.value == "sold"
        ) {
          setStatus(event.target.value);
        }
        break;
    }
  };

  const handleSave = () => {
    if (!addMode) {
      updatePet &&
        updatePet(objPetInfo(petId, category, name, urls, tags, status));
    }
    if (addMode) {
      addPet && addPet(objPetInfo(0, category, name, urls, tags, status));
    }
    history.push("/");
  };

  const onMode = () => {
    setAddMode(true);
    setPetId("Создается");
    setCategory("");
    setName("");
    setUrls([]);
    setTags([]);
    setStatus("available");
    setValid(false);
  };

  const offMode = () => {
    setAddMode(false);
    setValid(true);
  };

  const handleRemove = () => {
    deletePet && deletePet(petId);
    history.push("/");
  };

  const handleValid = () => {
    if (category.trim() !== "" && name.trim() !== "" && status.trim() !== "") {
      setValid(true);
    } else setValid(false);
  };

  return (
    <div className="petInfo">
      <h1>Редактирование питомца: </h1>
      <h1>{!addMode ? name : "Новый"}</h1>:<label>Код питомца: {petId}</label>
      <label>
        <span>Категория</span>
        <input
          type="text"
          name="category"
          placeholder="Кот"
          value={category}
          onChange={handleChange}
          onKeyUp={handleValid}
        ></input>
      </label>
      <label>
        <span>Имя питомца</span>
        <input
          type="text"
          name="name"
          placeholder="Барсик"
          value={name}
          onChange={handleChange}
          onKeyUp={handleValid}
        ></input>
      </label>
      <label>
        <span>Фотографии (url)</span>
        <Tags selectedTags={selectedUrls} initTags={urls} />
      </label>
      <label>
        <span>Теги</span>

        <Tags selectedTags={selectedTags} initTags={tags} />
      </label>
      <label>
        <span>Статус</span>

        <div className="pet-status">
          <span className="radio">
            <input
              name="status"
              type="radio"
              value="available"
              checked={status == "available"}
              onChange={handleChange}
              onMouseDown={handleValid}
            />
            <label>В наличии</label>
          </span>
          <span className="radio">
            <input
              name="status"
              type="radio"
              value="pending"
              checked={status == "pending"}
              onChange={handleChange}
              onMouseDown={handleValid}
            />
            <label>В ожидании</label>
          </span>
          <span className="radio">
            <input
              name="status"
              type="radio"
              value="sold"
              checked={status == "sold"}
              onChange={handleChange}
              onMouseDown={handleValid}
            />
            <label>Распродан</label>
          </span>
        </div>
      </label>
      <div className="button-group">
        <button
          className={isValid ? "save" : ""}
          disabled={!isValid}
          onClick={handleSave}
        >
          Сохранить изменения
        </button>
        {!addMode ? (
          <button className="remove" onClick={handleRemove}>
            Удалить
          </button>
        ) : (
          <button className="remove" onClick={offMode}>
            Отменить
          </button>
        )}
        <button className="add" onClick={onMode}>
          Добавить нового
        </button>
      </div>
    </div>
  );
};
export default PetPage;
