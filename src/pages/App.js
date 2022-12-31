import { useState } from "react";
import gitLogo from "../assets/github.png";
import Button from "../components/Button";
import Input from "../components/Input";
import { ItemRepo } from "../components/ItemRepo";
import { api } from "../services/api";

import { Container } from "./styles";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearcRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExit = repos.find((repo) => repo.id === data.id);

      if (!isExit) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("repositório não encontado");
  };

  const handleRemove = (id) => {
    setCurrentRepo(repos.filter((repo) => repo.id !== id));
  };
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} />

      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearcRepo} />
      {repos.map((repos) => (
        <ItemRepo repo={repos} remove={handleRemove} />
      ))}
    </Container>
  );
}

export default App;
