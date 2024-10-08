import CheckIcon from "@/public/check-white.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import styles from "./Pricing.module.css";
import Link from "next/link";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    classes: "card1",
    features: [
      "Up to 5 project memebers",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    classes: "card2",
    features: [
      "Up to 5 project memebers",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    classes: "card3",
    features: [
      "Up to 5 project memebers",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <div
        className={twMerge(
          "flex items-center justify-center gap-7 flex-wrap",
          `${styles.priceContainer}`
        )}
      >
        {pricingTiers.map(
          ({
            title,
            monthlyPrice,
            buttonText,
            popular,
            inverse,
            classes,
            features,
          }) => (
            <div
              className={twMerge(
                "p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA]",
                `${classes}`
              )}
            >
              <h3 className="text-lg font-bold">{title}</h3>
              <div className="flex items-baseline gap-1 mt-10 ">
                <span className="text-4xl font-bold -tracking-tighter leading-none">
                  ${monthlyPrice}
                </span>
                <span className="tracking-tight font-bold">/month</span>
              </div>
              <Link href="/login">
                <div className="flex items-center justify-center w-52">
                  <button className={twMerge("solid-button", "mt-10  w-full")}>
                    {buttonText}
                  </button>
                </div>
              </Link>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature) => (
                  <li className="text-sm flex items-center gap-30">
                    {/* <CheckIcon/> */}
                    <Image
                      src={CheckIcon}
                      alt="check icon loading..."
                      className="h-5 w-5 text-white"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Pricing;
