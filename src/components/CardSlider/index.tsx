//@ts-expect-error
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "../Card";
import { LogProps } from "../Log";

interface CardSliderProps {
  totals: LogProps[];
}

export default function CardSlider({ totals }: CardSliderProps) {
  return (
    <div className="w-full px-4 pb-7 mb-5">
      {totals.length > 0 && (
        <Splide
          aria-label="Total Slider"
          options={{
            type: "loop",
            perPage: 1,
            gap: "1rem",
            arrows: false,
            pagination: true,
          }}
        >
          {totals.map((total) => (
            <SplideSlide>
              <Card
                icon={total.icon}
                money={total.amount}
                title={total.title}
              />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
}
