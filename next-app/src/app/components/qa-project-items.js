import { MdOutlineFactCheck } from "react-icons/md";
import { SiCypress } from "react-icons/si";
import { PlaywrightIcon } from "../icons/Playwright";

export const qaProjectItems = [
  {
    name: "Swag Labs",
    url: "https://www.saucedemo.com",
    screenshot: "https://i.ibb.co/FLSCVP2q/Sauce-Labs.png",
    description:
      "End-to-end QA on a demo e-commerce app with intentional defects across multiple user accounts — covering manual testing, Cypress automation, and Playwright automation.",
    stats: [
      { value: "49", label: "Test Cases" },
      { value: "14", label: "Defects" },
      { value: "5", label: "Accounts" },
    ],
    testing: [
      {
        label: "Manual Testing",
        icon: <MdOutlineFactCheck className="text-cyan-400" />,
        repoUrl: "https://github.com/ChiomaSarah/swag-labs-qa",
        color:
          "border-cyan-700/30 text-cyan-300 hover:border-cyan-600/50 hover:bg-cyan-900/30",
      },
      {
        label: "Cypress",
        icon: <SiCypress className="text-white" />,
        repoUrl: "https://github.com/ChiomaSarah/swag-labs-automation-cypress",
        color:
          "border-emerald-700/30 text-white hover:border-emerald-600/50 hover:bg-emerald-900/30",
      },
      {
        label: "Playwright",
        icon: (
          <span className="text-sm">
            <PlaywrightIcon />
          </span>
        ),
        repoUrl:
          "https://github.com/ChiomaSarah/swag-labs-automation-playwright",
        color:
          "border-green-700/30 text-green-300 hover:border-green-600/50 hover:bg-green-900/30",
      },
    ],
    tags: [
      "Manual Testing",
      "Cypress",
      "Playwright",
      "Exploratory Testing",
      "Defect Reporting",
    ],
    highlight:
      "Caught a state binding bug where Last Name input silently overwrites First Name — blocking checkout entirely.",
  },
  // Add more QA projects here as you test more apps.
];
