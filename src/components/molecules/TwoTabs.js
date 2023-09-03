import { useState } from "react";

function TwoTabs({ setUser, close }) {
  const [activeTab, setActiveTab] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [insta, setInsta] = useState("");
  const [youtube, setYoutube] = useState("");

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const submitForm = () => {
    if (name === "" || email === "" || phone === "") {
      alert("Please provide all required fields");
    } else {
      setUser({ name, email, phone, insta, youtube });
      close();
    }
  };

  const resetFields = () => {
    setName("");
    setEmail("");
    setPhone("");
    setInsta("");
    setYoutube("");
  };

  return (
    <div>
      <div className="flex justify-around gap-4">
        <button
          className={`${
            activeTab === 1 ? "border-b-2 border-sky-500" : "border-b-2"
          } w-1/2 py-3 `}
          onClick={() => handleTabClick(1)}
        >
          Basic
        </button>
        <button
          className={`${
            activeTab === 2 ? "border-b-2 border-sky-500" : "border-b-2"
          } w-1/2 py-3 `}
          onClick={() => handleTabClick(2)}
        >
          Social
        </button>
      </div>

      <div className="p-4 border border-t-0 rounded-b-lg">
        {activeTab === 1 ? (
          <div className="space-y-2">
            <div className="flex flex-col justify-start gap-1  ">
              <label className="text-sm font-bold">Enter Name*</label>
              <input
                type="text"
                className="py-2 px-3 focus:ring-0 outline-none border-0 rounded-md text-sm"
                placeholder="Eg. John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-start gap-1  ">
              <label className="text-sm font-bold">Enter Email*</label>
              <input
                type="email"
                value={email}
                className="py-2 px-3 focus:ring-0 outline-none border-0 rounded-md text-sm"
                placeholder="Eg. john@xyz.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-start gap-1  ">
              <label className="text-sm font-bold">Enter Phone*</label>
              <input
                type="text"
                value={phone}
                className="py-2 px-3 focus:ring-0 outline-none border-0 rounded-md text-sm"
                placeholder="Eg. 9123456789"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="py-2 flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded text-xs"
                onClick={() => handleTabClick(2)}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex flex-col justify-start gap-1  ">
              <label className="text-sm font-bold">
                Instagram Link
                <span className="text-[#e7e7e8] text-sm"> (optional)</span>
              </label>
              <input
                type="text"
                value={insta}
                className="py-2 px-3 focus:ring-0 outline-none border-0 rounded-md text-sm"
                placeholder="Eg. ...instagram.com/username"
                onChange={(e) => setInsta(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-start gap-1  ">
              <label className="text-sm font-bold">
                Youtube Link{" "}
                <span className="text-[#e7e7e8] text-sm"> (optional)</span>
              </label>
              <input
                type="text"
                value={youtube}
                className="py-2 px-3 focus:ring-0 outline-none border-0 rounded-md text-sm"
                placeholder="Eg. youtube/username"
                onChange={(e) => setYoutube(e.target.value)}
              />
            </div>
            <div className="py-2 flex justify-end gap-3">
              <button
                className="border-2 text-black px-4 py-2 rounded text-xs"
                onClick={() => {
                  handleTabClick(1);
                  resetFields(); // Reset fields when going back to the first tab
                }}
              >
                Back
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded text-xs"
                onClick={() => submitForm()}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TwoTabs;
