import Image from "next/image"
import FileIcon from "@/public/file-download-02.svg"

const Header = () => {
  return (
    <div className="flex flex-col bg-[#ffffff] w-full mx-auto">
      <div className="flex flex-row justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Email finder</h1>
        <button className="flex flex-row gap-x-2 justify-center items-center px-2 py-2 text-xs border rounded-lg">
        <Image
                    src={FileIcon}
                    height={18}
                    width={18}
                    alt=""
                    className=""
                  />
            Sample file
            </button>
      </div>
    </div>
  )
}

export default Header
