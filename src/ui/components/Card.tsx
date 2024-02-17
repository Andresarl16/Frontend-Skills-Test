import { Card } from "@/models/CardModel";
import Button from "./Button";

export default function Card({ card }: { card: Card }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-fit p-1 border-2 rounded-lg border-border-secondary ">
        <card.svg />
      </div>
      <h4 className="py-3 text-xl font-semibold text-text-primary">
        {" "}
        {card.title}{" "}
      </h4>
      <p className="mb-2 text-base text-center text-text-tertiary">
        {" "}
        {card.description}{" "}
      </p>
      <Button text="View integration" type="tertiary" redirectTo=""></Button>
    </div>
  );
}
