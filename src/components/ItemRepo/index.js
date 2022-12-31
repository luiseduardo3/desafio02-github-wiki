import { ItemContainer } from "./styles";

export const ItemRepo = ({ repo, remove }) => {
  const handleRemove = () => {
    remove(repo.id);
  };
  return (
    <ItemContainer onClick={remove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>

      <a href={repo.html_url} rel="noreferrer" target="_blank">
        Ver repositorio
      </a>
      <br />
      <a href="#" rel="noreferrer" target="_blank" className="remover">
        Remover
      </a>

      <hr />
    </ItemContainer>
  );
};
