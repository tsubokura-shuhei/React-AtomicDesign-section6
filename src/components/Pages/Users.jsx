import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `サクラ${val}`,
    image: "https://source.unsplash.com/lwACYK8ScmA",
    email: "123456@gmail.com",
    phone: "090-0000-0000",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <Scontainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />

      <SuserArea>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </SuserArea>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SuserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
