import React, { useState } from "react"
import axios from "axios"

const User = () => {
  const [userId, setUserId] = useState("")

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://api.weecha.uk/v1/users/delete_user_by_playstore/${userId}`
      )
      console.log(response.data)
      alert("User deleted successfully!")
    } catch (error) {
      console.error("There was an error deleting the user!", error)
      alert("Failed to delete user.")
    }
  }

  return (
    <>
      <div
        className=""
        style={{ backgroundColor: "lightgray", minHeight: "100vh" ,height:"auto"}}
      >
        <div className="container text-center">
          <div className="row mb-4">
            <div className="col-12">
              <img
                src="./images/reechaIcon.png"
                className="logo-weecha mb-3"
                alt="Logo"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Playstore User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <button
                className="btn btn-danger btn-sm"
                onClick={handleDelete}
              >
                Delete User
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default User
