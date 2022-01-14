// Data Fetch
import { useUsers } from "hook/user";

import { GET_USERS } from "db/query/user";

function Homepage(props) {
  const { data, onAdd } = useUsers({ queryString: "" });

  const handleSubmit = async () => {
    const data = {
      name: "Putu",
      email: "putu@gmail.com",
    };
    const result = await onAdd(data);
  };
  return (
    <>
      <div style={{ marginLeft: 200, marginTop: 100 }}>
        <h1>User :</h1>
        {data.map((item, index) => (
          <li key={index}>
            {item.id} : {item.name}
          </li>
        ))}
        <button onClick={handleSubmit}>Click Here!</button>
      </div>
    </>
  );
}

export default Homepage;

export const getStaticProps = async (ctx) => {
  const userData = await GET_USERS();
  const user = Object.values(JSON.parse(JSON.stringify(userData)));

  return {
    props: {
      user: user,
    },
  };
};
