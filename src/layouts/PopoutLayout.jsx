import { Outlet } from "react-router-dom"

const PopoutLayout = () => {
    return (
      <>
        <div className="w-full">
          <Outlet  />
        </div>
      </>
    )
  }

export default PopoutLayout