import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const footerData = [
  {
    title: "Product",
    listItem: ["Stocks", "Futures & Options", "Pricing", "Fixed deposits"],
  },
  {
    title: "Company",
    listItem: ["About", "Products", "Pricing", "Careers", "Press & Media"],
  },
  {
    title: "Support",
    listItem: [
      "Contact",
      "Support Portals",
      "List Of Charges",
      "Downloads & Resources",
      "Videos",
    ],
  },
];
const Footer = () => {
  return (
    <>
      <div className="bg-gray-300 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Dash<span className="text-blue-600">board</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        {footerData.map((item) => (
          <div className="p-5" key={item.title}>
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">
                {item.title}
              </p>
              {item.listItem.map((list) => (
                <li
                  key={list}
                  className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
                >
                  {list}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © {new Date().getFullYear()} All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            Dashboard{" "}
          </span>
        </h1>
      </div>
    </>
  );
};

export default Footer;
