import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const users = [
  {
    userName: "@gergg",
    name: "Germain Gutierrez",
    image:
      "https://i.pinimg.com/564x/ca/c6/0d/cac60d0be85c35e3de8af9f039b7585d.jpg",
    isFollowing: true,
  },
  {
    userName: "@jess",
    name: "Jesys Moreno",
    image:
      "https://i.pinimg.com/564x/59/d4/ad/59d4ad76b7e6eec428eca5a9809982d0.jpg",
    isFollowing: false,
  },
  {
    userName: "@elchimu",
    name: "Chimuelo Perez",
    image:
      "https://i.pinimg.com/564x/3d/8d/37/3d8d37096f6b91ad0567023c0484ec03.jpg",
    isFollowing: true,
  },
];

function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing, image }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          image={image}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}

export default App;
