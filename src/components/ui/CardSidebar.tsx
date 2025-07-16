const sideArr = [
  { name: "계정 정보" },
  { name: "개인 정보" },
  { name: "소셜 연결" },
];

function CardSidebar() {
  return (
    <nav className="md:w-[25%] md:relative w-full p-4 mb-4 md:mb-0 border md:border-none border-accent-green rounded-lg">
      <ul className="md:flex-col flex h-full justify-evenly items-center">
        {sideArr.map((e, i) => (
          <li key={i + "side"}>
            <span>{e.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CardSidebar;
