import { SIGN_UP_FIELDS } from "../Signup/constants";
import { Button } from "./button";

function CardSidebar({
  goToIndex,
}: {
  goToIndex: (i: number, completed: boolean) => void;
}) {
  return (
    <nav className="md:w-[25%] md:relative w-full p-4 mb-4 md:mb-0 border md:border-none border-accent-green rounded-lg">
      <ul className="md:flex-col flex h-full justify-evenly items-center bg-amber-200 rounded-lg border border-gray-500">
        {Object.entries(SIGN_UP_FIELDS).map(([k, { name }]) => (
          <li key={k + "side"}>
            <Button onClick={() => goToIndex(Number(k), true)}>
              <span>{name}</span>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CardSidebar;
