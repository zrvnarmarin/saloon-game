import Link from "next/link";
import { belgrano } from "./layout";
import { characterColors } from "./data/homeData";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center gap-12 pt-8">
      {/* <Image
        src={Background}
        width={0}
        height={0}
        alt="background_image"
        className="absolute inset-0 -z-10"
      /> */}

      <div className="flex flex-col gap-">
        <h2 className="text-white w-full text-center uppercase pt-4 text-6xl flex flex-col">
          <span className="uppercase text-[#542A00] text-6xl">Salun</span>
          <span className="uppercase text-[#542A00] text-3xl">Posljednje</span>
          <span className="uppercase text-[#542A00] text-5xl">Prilike</span>
        </h2>
        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-full flex flex-row items-center gap-2">
            <span className="w-full h-[0.5px] bg-[#542A00] ml-2"></span>
            <div className="flex items-center gap-2">
              <svg
                fill="#542A00"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#542A00"
                width={20}
                height={20}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"></path>
                </g>
              </svg>
              <svg
                fill="#542A00"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#542A00"
                width={20}
                height={20}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"></path>
                </g>
              </svg>
              <svg
                fill="#542A00"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#542A00"
                width={20}
                height={20}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"></path>
                </g>
              </svg>
            </div>
            <span className="w-full h-[0.5px] bg-[#542A00] mr-2"></span>
          </div>
          <p
            className={`uppercase text-[#542A00] ${belgrano.className} text-base`}
          >
            Igra misterije ubojstva
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-9 pb-10">
        {characterColors.map((characterColor) => (
          <Link
            href={`/secrets/${formatCharacterName(
              characterColor.characterName
            )}`} // Use the function to format the name
            key={characterColor.id}
            className={`${belgrano.className} rounded-full py-[5.3rem] text-center ${characterColor.color} text-white break-all`}
            // style={{ backgroundColor: characterColor.color }} // Use inline style for dynamic colors
          >
            {characterColor.characterName}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Function to format the character name
const formatCharacterName = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, "-");
};

// export const characterColors: CharacterColor[] = [
//   {
//     id: 1,
//     color: "bg-gradient-to-r from-[#414141] to-[#000000]",
//     characterName: "Clara Cassidy",
//   },
//   {
//     id: 2,
//     color: "bg-gradient-to-r from-[#FA7900] to-[#E87000]",
//     characterName: "Lilly Hart",
//   },
//   {
//     id: 3,
//     color: "bg-gradient-to-r from-[#D90E03] to-[#B80A00]",
//     characterName: "Scarlett May Beauregard",
//   },
//   {
//     id: 4,
//     color: "bg-gradient-to-r from-[#0A40AE] to-[#062F84]",
//     characterName: "Earl Colton",
//   },
//   {
//     id: 5,
//     color: "bg-gradient-to-r from-[#40AD0A] to-[#318606]",
//     characterName: "Sawyer West",
//   },
//   {
//     id: 6,
//     color: "bg-gradient-to-r from-[#EFD700] to-[#CDB900]",
//     characterName: "William Hargreaves",
//   },
// ];

// export type CharacterColor = {
//   id: number;
//   color: string;
//   characterName: string;
// };

export const StainButton = () => {
  return (
    <svg
      width="122"
      height="115"
      viewBox="0 0 122 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.9">
        <path
          d="M25.78 65.9609C26.411 66.0862 27.628 66.0305 26.9772 67.0746C24.78 67.2695 21.1602 68.7395 20.4982 68.8843C20.4306 68.8982 20.563 68.4917 19.2306 68.745C18.8306 68.8202 18.7066 69.2935 18.6672 69.3019C18.2109 69.4104 16.6756 68.7311 16.3432 69.5803C13.4023 70.1176 13.2079 71.5124 12.6107 71.6684C11.9685 71.8354 11.0023 71.5124 10.9206 71.5292C10.7685 71.5626 9.07546 73.3722 8.52616 73.478C8.07826 73.5643 7.69797 73.2497 7.25852 73.3388C6.67541 73.4585 6.46132 75.1012 5.1458 75.2877C1.70348 75.7749 2.55983 69.7529 5.4275 73.3388C7.35712 71.9551 18.1095 67.1887 19.0898 66.9354C19.9602 66.7099 23.3265 66.6737 25.78 65.9609Z"
          fill="#5B1010"
        />
        <path
          d="M38.2453 31.2986C43.8652 31.1511 41.4679 40.475 36.696 37.9805C33.7382 36.4325 34.7523 31.3905 38.2453 31.2986Z"
          fill="#5B1010"
        />
        <path
          d="M69.443 81.4128C69.3162 81.4156 67.5218 80.8532 67.3303 81.9696C66.3443 91.3075 63.7443 100.392 64.6542 109.88C64.7415 110.782 66.7979 114.251 63.0344 114.404C60.4738 112.823 62.2964 111.306 62.5414 109.602C62.7753 107.973 62.4738 99.4232 62.2597 97.3518C61.8147 93.0504 60.2175 87.0562 59.8653 82.4568C59.5611 82.3761 58.9357 81.7191 58.8794 81.6912C58.9836 80.9785 59.8822 81.9334 60.3583 82.3872C62.2006 81.9279 64.133 82.1311 65.9922 81.8304C66.8401 81.694 69.0768 80.3075 69.443 81.4128Z"
          fill="#5B1010"
        />
        <path
          d="M69.1616 83.3611C68.8405 81.9579 69.3447 81.0892 67.3306 81.969C67.5221 80.8526 69.3165 81.415 69.4433 81.4122C69.4574 81.4122 69.4151 81.6071 69.6546 81.5514C69.8658 81.5013 72.7476 79.3464 73.387 79.5329C72.9448 81.2619 72.8772 83.3277 72.1898 84.7531L69.1616 83.3611Z"
          fill="#5B1010"
        />
        <path
          d="M48.3158 78.2111L48.1749 95.9598L47.5411 96.0294L47.4707 77.6543C47.7439 77.8241 48.0482 78.0691 48.3158 78.2111Z"
          fill="#5B1010"
        />
        <path
          d="M77.1896 23.2254C76.4431 23.2504 77.7276 22.3094 77.6121 21.9725C78.1474 21.4658 79.7051 18.097 79.7249 17.866C79.7559 17.5152 78.584 15.2684 81.4855 14.873C83.939 16.7802 80.5136 18.0135 80.1474 18.4228C79.8544 18.7485 79.2094 20.7113 78.8798 21.2069C78.3981 21.9335 77.6938 22.5238 77.1896 23.2254Z"
          fill="#5B1010"
        />
        <path
          d="M31.3438 46.7507C33.9269 46.0686 33.9833 50.0498 31.2029 49.674C29.8987 48.8053 30.4621 46.9845 31.3438 46.7507Z"
          fill="#5B1010"
        />
        <path
          d="M9.93452 52.4609C13.6191 53.6776 13.2698 52.4749 14.0191 52.6001C14.7374 52.7199 14.6952 53.6832 15.005 53.9922C15.8896 54.8748 20.7573 55.3119 20.2868 56.1499C18.915 56.5564 18.5995 55.3703 16.6952 56.2195C15.6586 54.4182 14.7881 54.911 13.5966 54.4098C13.3853 54.3207 13.3825 53.9337 13.174 53.853C12.6163 53.633 8.42463 52.9175 9.93452 52.4609Z"
          fill="#5B1010"
        />
        <path
          d="M0.357132 49.397C1.35152 49.2494 1.25574 50.0513 1.34307 50.093C1.68392 50.2545 4.22763 50.8475 4.3713 50.7195C4.42764 50.6666 4.39665 49.6142 5.42766 49.9538C5.94316 50.1237 5.23329 51.0981 7.82207 51.7635C8.84745 53.111 4.1065 50.9895 3.87833 50.9283C2.08956 50.4494 -1.06262 50.9032 0.357132 49.397Z"
          fill="#5B1010"
        />
        <path
          d="M118.74 41.461C118.937 41.3775 118.872 41.3246 118.881 41.3218C118.974 41.28 119.737 40.3279 120.641 40.4866C122.495 41.9789 119.343 43.7412 118.74 41.461Z"
          fill="#5B1010"
        />
        <path
          d="M95.7816 51.9023C95.8661 52.2754 97.2633 52.8072 95.852 53.9904C94.4351 54.4192 93.4829 52.2197 95.4999 51.9023C95.514 51.9023 95.5872 52.1167 95.7816 51.9023Z"
          fill="#5B1010"
        />
        <path
          d="M100.218 54.4062C103.427 55.6229 98.686 58.2539 99.4437 54.8935L100.218 54.4062Z"
          fill="#5B1010"
        />
        <path
          d="M60.1471 16.9602C60.2288 17.3166 60.1725 18.8339 60.288 19.1179C60.4513 19.5216 60.8063 19.1736 60.8514 19.1875C60.4175 19.7415 59.5584 19.7304 59.1612 18.9091C59.2851 17.6674 58.6936 15.8549 60.1471 16.9602Z"
          fill="#5B1010"
        />
        <path
          d="M87.1194 70.6953L87.6123 70.9041C87.2912 73.5741 89.7363 75.3336 88.1053 76.5419C84.8123 76.6366 87.7194 74.3954 87.1194 70.6953Z"
          fill="#5B1010"
        />
        <path
          d="M86.3447 70.1374C86.4715 69.9008 86.6884 69.6029 86.7673 69.4414C90.3983 71.6353 90.1448 71.9388 86.3447 70.1374Z"
          fill="#5B1010"
        />
        <path
          d="M84.3024 27.2617C85.7644 27.6543 84.6545 28.7289 83.8798 29.3498C83.4798 29.0324 83.9615 27.3452 84.3024 27.2617Z"
          fill="#5B1010"
        />
        <path
          d="M51.0624 81.4121H51.7666C53.2145 83.2246 49.7103 83.3666 51.0624 81.4121Z"
          fill="#5B1010"
        />
        <path
          d="M65.7106 5.68555L66.3444 6.17277C66.8458 8.53926 63.8655 6.59595 65.7106 5.68555Z"
          fill="#5B1010"
        />
        <path
          d="M2.89238 65.6836H3.45577C4.78256 67.3847 1.5008 67.3819 2.89238 65.6836Z"
          fill="#5B1010"
        />
        <path
          d="M76.4151 20.7188L77.049 21.0668C77.0208 22.5702 75.0743 21.5651 76.4151 20.7188Z"
          fill="#5B1010"
        />
        <path
          d="M9.23044 63.4551L10.0051 63.8031C9.72059 65.2202 8.21915 64.3321 9.23044 63.4551Z"
          fill="#5B1010"
        />
        <path
          d="M115.43 42.1562C116.286 43.1724 113.486 43.6123 114.726 42.2955L115.43 42.1562Z"
          fill="#5B1010"
        />
        <path
          d="M83.7392 12.5059L83.9505 12.5755C81.68 15.7187 81.1701 15.7159 83.7392 12.5059Z"
          fill="#5B1010"
        />
        <path
          d="M46.6258 41.7404C46.5328 42.0829 46.5469 41.927 46.3441 42.158C46.2539 41.7321 45.4426 40.8579 45.2173 40.418L46.6258 41.7404Z"
          fill="#5B1010"
        />
        <path
          d="M79.7955 11.9492C81.4659 12.1274 79.4067 13.1352 79.4434 12.2972L79.7955 11.9492Z"
          fill="#5B1010"
        />
        <path
          d="M81.0631 12.3679C81.5504 12.2732 82.3673 13.2393 80.7109 12.8551L81.0631 12.3679Z"
          fill="#5B1010"
        />
        <path
          d="M77.6121 21.9728C77.7276 22.3097 76.4431 23.2507 77.1896 23.2256C76.6516 23.9773 75.8008 24.5898 75.4994 25.5225C74.198 29.5483 77.1248 35.4646 80.4995 33.5268C81.6066 32.8921 82.7644 29.0973 85.4292 30.7427C88.725 32.7807 84.6883 37.2798 84.5137 37.6334C82.5644 41.5339 87.387 45.2424 91.0631 41.1831C91.649 41.1803 89.5561 45.0141 92.7533 44.6633C92.7139 43.0234 92.9927 40.5539 95.0069 40.0695C99.5591 38.9753 101.331 47.2441 94.9364 46.2641C95.4801 46.6177 97.2633 47.8176 97.683 47.865C99.2098 48.0348 108.227 44.3013 108.81 44.2456C109.072 44.2206 109.59 44.1733 109.725 44.4544C109.714 46.0024 108.754 45.0586 108.669 45.0809C108.185 45.2006 103.655 47.0771 102.19 47.5866C101.235 47.9207 96.3055 49.1429 96.0632 49.605C96.0097 49.7081 95.7421 51.7265 95.7815 51.9019C95.5872 52.1163 95.5139 51.9019 95.4998 51.9019L95.7815 49.605C91.4716 49.3712 84.8236 57.7764 90.9927 59.8366C92.2575 60.2598 101.221 59.7002 103.035 59.419C105.385 59.0543 106.68 57.9518 107.261 57.8878C109.759 57.6121 111.444 60.0454 110.852 62.3423C109.976 64.6838 106.897 65.6721 104.866 64.152C104.249 63.6898 103.638 62.2839 102.613 61.5071C99.8915 59.4413 98.7506 61.1702 98.5281 61.2287C98.3027 61.2872 94.2097 59.9257 94.6547 61.7159C97.5393 64.6587 97.1337 62.9521 99.0915 63.1776C102.263 63.5423 102.354 67.9969 99.2323 68.0498C96.3534 68.0999 96.8548 64.3831 95.1477 63.1776C92.4688 61.2872 88.6518 63.2193 89.2321 67.0753L87.7532 66.3097C87.6518 67.2451 87.1814 68.601 86.7673 69.4418C86.6884 69.6033 86.4715 69.9012 86.3447 70.1378C85.8827 70.9981 85.6743 71.0622 85.6405 71.1123L85.3588 70.6947C86.556 68.356 86.7419 67.6405 86.2039 64.9872C85.8264 63.1191 84.2686 60.9531 84.1616 56.0781C81.9334 59.9619 85.063 61.0589 84.6545 64.9872C84.3757 66.1259 84.2799 68.5008 82.8235 70.4859C81.7615 71.9308 80.4009 72.354 78.8093 72.9219C78.6657 72.9721 78.8093 73.2922 78.6685 73.3396C78.322 73.4537 78.7333 72.9581 78.3868 73.0611C77.7051 73.2616 77.0234 73.4231 76.3445 73.618L75.9924 73.2004C76.6318 72.638 81.2178 71.9364 82.8235 67.0057C84.8686 60.722 80.0854 61.8663 83.1052 55.1733C80.8854 56.557 78.1671 55.0034 77.4713 52.6676C76.0882 48.0209 79.4122 43.9004 75.0065 48.1434C71.4909 44.9667 77.6206 42.358 72.0486 44.6633L70.4289 42.784C72.2233 39.0004 72.674 38.7136 69.3725 41.7399C69.2683 41.7594 67.4655 40.9882 67.4007 40.9047C67.2288 40.682 66.533 36.1912 65.9922 35.4757C65.4823 35.5843 66.164 43.7 60.0061 41.4615C59.2596 40.7599 60.1526 32.3492 59.8653 30.6731L59.4427 30.8123C59.3188 33.0702 58.623 35.6483 58.4568 37.8422C58.485 37.5109 58.1892 37.3132 58.1751 37.2854C58.0596 37.0766 57.5328 35.8794 57.4005 35.8933C57.0624 35.9267 56.8821 40.3228 56.0624 42.436C55.6089 43.6053 54.7891 44.5046 53.8793 45.3593C52.7525 41.094 52.7187 42.4221 53.2454 45.8465L50.9214 47.5866C46.327 41.2026 48.3721 44.2846 46.7664 46.9601C46.1411 48.0014 45.558 47.9457 45.4988 48.0042C43.2452 46.601 45.8143 50.2203 44.372 52.4588C44.234 52.6703 42.5579 53.9204 42.1889 54.2684C41.8959 54.5441 41.048 55.6995 40.9212 55.7997C40.7522 55.9305 40.4057 55.5157 40.2874 55.7301C40.1466 55.9862 40.4339 56.4567 40.4283 56.4957C39.9522 59.8812 40.2114 59.8366 40.1466 62.2727C40.124 63.1386 39.6733 64.0267 39.724 65.4745C39.7804 67.1115 40.4424 68.7625 40.5691 70.4163C39.3747 69.2358 37.9522 67.9746 36.2028 68.2586C35.2394 70.0933 39.5409 69.9791 39.0198 74.1052C38.7494 76.2462 36.1521 77.6187 35.9916 80.439C35.8901 76.8754 34.0591 77.4628 32.9633 75.7757C30.7576 72.3763 33.8507 70.0487 31.9774 67.841C30.1464 65.6833 23.4364 68.4089 20.9208 68.885C22.2223 70.0571 23.6561 69.6033 22.7518 69.9986C21.1715 70.0738 20.5462 68.1138 18.8785 69.3722C20.9603 70.7058 18.3151 69.3499 17.6813 69.3026C17.2869 69.2748 16.7658 69.5031 16.3433 69.581C16.6757 68.7319 18.2109 69.4112 18.6673 69.3026C18.7067 69.2943 18.8306 68.821 19.2306 68.7458C20.5631 68.4924 20.4307 68.8989 20.4983 68.885C21.1603 68.7402 24.7801 67.2702 26.9773 67.0753C27.628 66.0313 26.4111 66.087 25.7801 65.9617C27.1181 65.5747 32.1013 62.7906 32.5408 61.5767C33.414 59.1685 30.7492 58.7815 28.9492 58.723C28.9154 58.723 28.5238 59.1323 28.3858 59.1406C27.2195 59.2102 24.6139 56.5653 21.9068 58.723C21.9377 56.9885 23.7265 57.1862 21.5546 56.0085C24.7941 55.602 31.6225 59.0098 34.1605 57.4701C36.9155 55.7997 31.676 53.2494 32.8225 50.4403C33.9633 47.645 38.5719 52.4922 40.9917 49.1874C43.9326 45.1672 36.0732 41.378 40.9212 41.3223C42.741 43.3575 39.5578 42.6169 42.048 45.7769C43.6143 43.1515 42.0846 42.0935 43.4565 42.2968C44.2988 42.9482 43.4058 43.0902 43.2452 43.5496C42.9494 44.4016 42.741 45.3287 42.4706 46.1945C44.7241 46.6706 44.6312 47.904 45.9213 44.9417C46.3044 44.0591 46.5636 43.2072 46.3439 42.1576C46.5467 41.9265 46.5326 42.0824 46.6256 41.7399C47.3157 39.1897 45.3467 39.3651 45.1467 39.2342C44.2368 38.6329 44.3974 32.5106 43.9495 30.9515C43.7692 30.3251 41.848 27.2737 41.5551 26.497C41.017 25.0715 40.7917 22.7802 40.71 22.5992C40.5071 22.1482 38.8226 21.0679 38.7381 20.6503C38.6367 20.1464 39.0649 19.4337 39.0198 19.1191C38.9127 18.3785 37.4986 14.954 36.9071 14.1077C38.1606 12.6961 37.7184 14.4334 37.7522 14.5253C38.1972 15.7587 39.3522 18.4425 40.0057 20.0935C40.2621 20.7422 41.2677 21.9255 41.4142 22.3208C41.51 22.5769 41.8537 26.1128 42.8931 27.1234C42.9804 27.2097 43.6227 27.2849 43.8086 27.4714C45.0622 28.7298 45.9157 34.7992 48.7383 33.4572C47.6284 27.4603 49.2932 33.5825 50.2172 34.0837C54.2314 36.2636 54.7215 28.6045 54.4426 26.4274C52.1074 28.4848 53.2821 27.1262 53.5271 24.6873C53.5835 24.1165 53.8454 20.7172 53.8088 20.5111C53.7356 20.0935 50.1749 13.2864 49.8651 12.994C49.4538 12.6043 47.1073 13.6928 47.6115 10.906C50.8989 7.5344 49.9468 13.1082 51.9778 13.8293C51.3693 10.9533 50.1271 8.1831 49.4425 5.33774C49.3073 4.77535 49.0904 3.76751 49.5834 4.85052C50.5327 6.94139 51.4426 10.9004 52.4003 13.2724C52.6764 13.9546 55.1328 19.1413 55.3582 19.3975C55.6821 19.7678 58.5103 21.1181 58.8089 20.9983C59.1554 20.8591 59.1244 19.2638 59.1611 18.9103C59.5582 19.7316 60.4174 19.7427 60.8512 19.1887C62.4372 19.7204 60.7526 20.8424 63.4569 20.3023C62.4738 16.9196 66.4598 19.3362 66.6964 13.7597C68.1641 15.5387 67.4035 11.95 68.5979 13.1332C68.0429 15.8422 70.2486 16.1763 70.5697 15.3605C69.8711 11.3598 70.5669 12.0697 70.5697 11.8804C70.6148 9.22993 69.6655 9.1464 69.5838 8.81788C69.3134 7.73486 70.1331 7.6402 70.1472 7.56503C70.3247 6.56832 69.9951 3.90393 70.1472 2.55363C70.1951 2.13045 70.9697 1.39266 70.5697 0.187144C72.3134 -0.829055 70.6599 2.58704 70.5697 3.38887C70.2373 6.37343 71.1726 9.43038 70.7106 12.4372C72.1078 14.0826 71.2486 15.0404 71.4148 16.4742C71.9303 20.8953 73.5219 21.313 73.5275 21.764C73.5275 21.9227 72.243 23.5235 73.8797 24.4785C74.9417 24.6093 75.3896 24.1555 75.922 23.2952C74.4121 22.4711 75.8656 23.0614 76.8375 22.6688C76.8854 22.6493 77.491 22.0869 77.6121 21.9728Z"
          fill="#5B1010"
        />
        <path
          d="M91.4857 46.3348C92.821 46.112 93.6041 47.6099 93.9506 48.6316L90.7815 50.5109C88.6885 49.9457 90.0491 46.5742 91.4857 46.3348Z"
          fill="#5B1010"
        />
        <path
          d="M110.852 62.3437C111.444 60.0468 109.759 57.6135 107.261 57.8891C106.68 57.9532 105.385 59.0557 103.035 59.4204C101.221 59.7016 92.2575 60.2612 90.9927 59.838L97.683 59.5596C97.7618 59.5262 96.7139 58.3736 97.7534 58.1675V58.3068C96.9196 59.0807 98.4323 59.9772 98.8802 59.0028C98.9928 59.6459 104.035 59.0752 104.303 59.0028C104.793 58.8719 106.751 57.6692 107.12 57.6107C109.894 57.1625 111.756 59.9243 110.852 62.3437Z"
          fill="#5B1010"
        />
        <path
          d="M60.1471 16.9632C58.6935 15.8579 59.2851 17.6704 59.1612 18.9121C59.1245 19.2656 59.1555 20.8609 58.809 21.0001C58.5104 21.1199 55.6822 19.7696 55.3583 19.3993C55.1329 19.1431 52.6765 13.9564 52.4005 13.2743C51.4427 10.9022 50.5328 6.94319 49.5835 4.85233C49.8145 4.78551 49.9441 5.05278 50.006 5.20034C50.7018 6.85967 51.6709 10.9384 52.823 13.6919C53.0822 14.3099 55.3019 18.8926 55.4991 19.1209C56.0794 19.7918 57.7245 20.2679 58.5273 20.7217C59.3865 19.4271 58.2062 16.0946 59.6541 16.2672C60.1922 16.5261 60.0485 16.5372 60.1471 16.9632Z"
          fill="#5B1010"
        />
        <path
          d="M86.2041 64.9892C85.7449 65.0644 85.8745 64.0231 85.4294 63.3188C84.6491 63.4134 84.9562 64.6941 84.9364 64.7804C84.9055 64.9057 84.6576 64.9725 84.6547 64.9892C85.0632 61.0608 81.9336 59.9639 84.1618 56.0801C84.2688 60.955 85.8266 63.1211 86.2041 64.9892Z"
          fill="#5B1010"
        />
        <path
          d="M45.2875 34.5041C45.9044 34.5487 45.5804 38.1736 46.0621 38.7499C44.7072 39.8329 44.7044 34.4624 45.2875 34.5041Z"
          fill="#5B1010"
        />
        <path
          d="M33.7379 67.6348H34.4422C35.9042 69.3192 32.0787 69.3804 33.7379 67.6348Z"
          fill="#5B1010"
        />
        <path
          d="M83.88 51.7656C84.1814 51.9633 82.6884 56.8243 82.8236 53.9233C82.849 53.4027 83.3194 52.0691 83.88 51.7656Z"
          fill="#5B1010"
        />
        <path
          d="M41.4144 64.1504C41.7158 70.1168 42.7862 71.1525 46.9074 72.3636C49.5272 73.132 47.4314 72.6225 49.0906 74.034C52.1301 76.6177 64.3557 77.3777 68.2459 76.5397C70.722 76.0079 73.5615 74.2762 74.7249 73.8948C74.8038 73.8698 75.3249 73.9115 76.3447 73.6164C77.0236 73.4215 77.7053 73.26 78.387 73.0596C78.7335 72.9566 78.3222 73.4521 78.6687 73.338C78.8123 73.2907 78.6687 72.9705 78.8095 72.9204C80.4011 72.3524 81.7617 71.9292 82.8237 70.4843C84.28 68.4992 84.3758 66.1244 84.6547 64.9857C84.6575 64.969 84.9054 64.9021 84.9364 64.7769C84.9561 64.6906 84.6491 63.4099 85.4294 63.3152C85.8744 64.0196 85.7449 65.0608 86.204 64.9857C86.7421 67.6389 86.5561 68.3544 85.3589 70.6931C83.5814 74.1677 81.0884 75.7351 77.7532 77.5141C76.9475 77.9457 73.6545 79.2403 73.5277 79.5326C73.3671 82.9153 71.553 87.8321 71.9784 91.0867C72.1051 92.0528 74.0911 95.0624 70.7812 95.3324C68.4769 94.2661 70.1079 91.9943 70.1474 91.5043C70.3361 89.1044 69.7079 85.7495 69.1614 83.3608L72.1897 84.7528C72.877 83.3274 72.9446 81.2616 73.3869 79.5326C72.7474 79.3461 69.8657 81.501 69.6544 81.5511C69.4149 81.6068 69.4572 81.4119 69.4431 81.4119C69.0769 80.3066 66.8402 81.6931 65.9923 81.8295C64.1331 82.1302 62.2007 81.927 60.3584 82.3863C59.8824 81.9325 58.9837 80.9776 58.8795 81.6903C57.9527 81.2449 56.6569 82.1942 56.6259 82.3167C56.4344 83.0434 58.0203 84.8029 55.4287 85.7273C53.0709 84.5357 54.6907 83.628 54.6541 82.1775C54.6315 81.2866 54.0372 81.2671 54.2315 80.2287C54.0963 79.9502 50.823 79.5382 48.3159 78.2102C48.0483 78.0682 47.7441 77.8232 47.4708 77.6534C44.7947 75.9968 42.5665 73.6164 40.9214 70.9715L41.1327 74.382C39.9608 75.5235 40.7918 73.2879 40.5693 70.4147C40.4425 68.7609 39.7805 67.1099 39.7242 65.4729C39.6735 64.0252 40.1242 63.137 40.1467 62.2712C40.2115 59.8351 39.9524 59.8796 40.4284 56.4941C41.7862 58.7576 41.2904 61.6726 41.4144 64.1504Z"
          fill="#5B1010"
        />
        <path
          d="M85.6404 71.111C84.4911 72.8956 83.3192 74.3851 81.6262 75.7048C80.9812 76.2087 78.0938 78.2745 77.7529 77.5144C81.0882 75.7354 83.5812 74.1679 85.3587 70.6934L85.6404 71.111Z"
          fill="#5B1010"
        />
        <path
          d="M60.0063 41.4603C59.6429 41.3044 59.6795 42.0032 59.7246 42.7827C60.0514 48.3231 61.1275 54.0055 59.8655 59.4874C58.9669 60.1918 59.2401 55.2472 58.1753 55.172C58.7866 49.434 58.0232 43.5623 58.457 37.841C58.6232 35.6471 59.319 33.069 59.4429 30.8111L59.8655 30.6719C60.1528 32.3479 59.2598 40.7587 60.0063 41.4603Z"
          fill="#5B1010"
        />
        <path
          d="M58.175 37.2848L57.6116 37.6328C57.6173 41.0349 56.882 44.4037 56.7665 47.7948C56.5947 52.8201 57.1609 57.9289 56.9074 62.9681H55.4989C55.7665 59.321 55.2538 55.7295 55.0764 52.1101C55.0764 52.0544 54.7975 51.8874 54.7947 51.8317C54.7524 50.4202 56.5637 44.7517 56.0623 42.4354C56.882 40.3222 57.0623 35.9261 57.4004 35.8927C57.5328 35.8788 58.0595 37.0759 58.175 37.2848Z"
          fill="#5B1010"
        />
        <path
          d="M45.4989 48.0018C44.8791 48.6171 45.8453 49.9145 45.9214 50.7163C46.3777 55.5134 45.1636 61.9001 44.3721 52.4564C45.8144 50.218 43.2453 46.5986 45.4989 48.0018Z"
          fill="#5B1010"
        />
        <path
          d="M46.9071 72.3635C42.7859 71.1524 41.7155 70.1167 41.4141 64.1504C41.9662 64.9439 42.2535 66.3972 42.8225 67.4217C43.8338 69.2481 45.7381 70.6624 46.9071 72.3635Z"
          fill="#5B1010"
        />
        <path
          d="M76.3445 73.6169C75.3248 73.912 74.8036 73.8702 74.7248 73.8953C73.5614 74.2767 70.7219 76.0084 68.2458 76.5402C64.3555 77.3782 52.1299 76.6181 49.0904 74.0345C47.4312 72.6229 49.5271 73.1324 46.9073 72.364C45.7383 70.6629 43.834 69.2486 42.8227 67.4222C42.2537 66.3977 41.9663 64.9444 41.4142 64.1509C41.2903 61.6731 41.7861 58.7581 40.4283 56.4946C40.4339 56.4556 40.1466 55.9851 40.2874 55.729C40.4058 55.5146 40.7522 55.9294 40.9213 55.7986C41.048 55.6984 41.8959 54.543 42.1889 54.2673C42.5579 53.9193 44.234 52.6693 44.372 52.4577C45.1636 61.9014 46.3777 55.5146 45.9214 50.7176C45.8453 49.9158 44.8791 48.6184 45.4988 48.0031C45.558 47.9446 46.1411 48.0031 46.7664 46.9591C48.3721 44.2835 46.327 41.2015 50.9215 47.5855L53.2455 45.8454C52.7187 42.421 52.7525 41.0929 53.8793 45.3582C54.7891 44.5035 55.6089 43.6042 56.0624 42.4349C56.5638 44.7513 54.7525 50.4197 54.7948 51.8312C54.7948 51.8869 55.0737 52.054 55.0765 52.1096C55.2539 55.729 55.7666 59.3205 55.499 62.9677H56.9075C57.161 57.9284 56.5948 52.8196 56.7667 47.7943C56.8821 44.4032 57.6174 41.0345 57.6117 37.6323L58.1751 37.2843C58.1892 37.3121 58.485 37.5098 58.4568 37.8411C58.023 43.5624 58.7864 49.4341 58.1751 55.1722C59.2399 55.2473 58.9667 60.1919 59.8653 59.4875C61.1273 54.0056 60.0512 48.3233 59.7245 42.7829C59.6794 42.0033 59.6428 41.3045 60.0062 41.4604C66.164 43.6989 65.4823 35.5832 65.9922 35.4746C66.5331 36.1901 67.2288 40.6809 67.4007 40.9036C67.4655 40.9871 69.2683 41.7583 69.3725 41.7389C72.674 38.7125 72.2233 38.9993 70.4289 42.7829L72.0487 44.6622C77.6206 42.3569 71.4909 44.9656 75.0065 48.1423C79.4122 43.8993 76.0882 48.0198 77.4713 52.6665C78.1671 55.0023 80.8855 56.5559 83.1052 55.1722C80.0854 61.8652 84.8686 60.7209 82.8235 67.0046C81.2179 71.9353 76.6319 72.6369 75.9924 73.1993L76.3445 73.6169Z"
          fill="#5B1010"
        />
        <path
          d="M49.2313 45.6367C50.2595 45.6367 48.4595 55.5788 47.7524 53.5018C48.0229 52.7 48.8229 45.6367 49.2313 45.6367Z"
          fill="#5B1010"
        />
        <path
          d="M62.1893 49.8125C62.9526 52.3822 63.2315 55.1134 63.4569 57.7472L62.6118 57.8864C62.2259 57.75 62.0709 50.7452 62.1893 49.8125Z"
          fill="#5B1010"
        />
        <path
          d="M65.006 49.9531L65.499 55.1733C63.1017 56.2898 65.0088 51.4565 65.006 49.9531Z"
          fill="#5B1010"
        />
        <path
          d="M48.3861 54.8242L49.02 57.2603L47.8228 57.6083L48.3861 54.8242Z"
          fill="#5B1010"
        />
      </g>
    </svg>
  );
};
