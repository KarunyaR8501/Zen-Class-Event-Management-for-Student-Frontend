/* eslint-disable no-restricted-globals */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Profile from "../../Components/Profile/Profile";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { API } from "../../global.js";
import './Stucapstone.css'
function Stucapstone() {
  const [cap, setCap] = useState([]);

  useEffect(() => {
    loadData();
  }, []);
  let loadData = async () => {
    try {
      let cStone = await axios.get(`${API}/getCapstone`, {
        headers: {
          userid: window.localStorage.getItem("userId"),
        },
      });
      setCap(cStone.data.data);
    } catch (error) {}
  };

  return (
    <>
      <Sidebar />
      <div className="row">
        <div className="col-12 col-md-12 w-100  secTwo">
          <h3>Capstone</h3>
          <Profile />
        </div>
      </div>
      {cap  ? (
        <div className="row mt-3 justify-content-center">
          {cap.map((val, idx) => {
            return (
              <>
                <div className="col-md-8">
                  <div className="col-sm-8">
                    <div className="card" key={idx}>
                      <div className="card-body">
                        <h5 className="card-title">Title : Zen class Event Management for students</h5>
                        <h6>Any specific requirements</h6>
                        <p className="card-text" style={{textAlign:'left'}}>The project should achieve the CODE QUALITY
                                                                       Use fonts/icons if it’s required in the design.
                                                                      The use of various charts is required in the design.
                                                                        The use of bootstrap/ material CSS is required in the design.
                                                                        
                                                                        How do I submit my work?

                                                            Push all your work files to GitHub in two different repositories as given below
                                                            Front-end repo name project-name-frontend.
                                                            Back-end repo name project-name-backend.
                                                            Deploy your front-end application on Netlify(https://www.netlify.com) and 
                                                            back-end application on Render(https://render.com/).</p>
                      </div>
                    </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Submission</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="codeName">Front-end Source code</td>
                        <td>
                          <input type="text" className="codeSubmission"/>
                        </td>
                      </tr>
                      <tr>
                        <td className="codeName">Back-end Source code</td>
                        <td>
                          <input type="text" className="codeSubmission"/>
                        </td>
                      </tr>
                      <tr>
                        <td className="codeName">Front-end Deployed URL</td>
                        <td>
                          <input type="text" className="codeSubmission"/>
                        </td>
                      </tr>
                      <tr>
                        <td className="codeName">Back-end Deployed URL</td>
                        <td>
                          <input type="text" className="codeSubmission"/>
                        </td>
                      </tr>
                    </tbody>
                  </table><br/>
                  <div className="my-0 align-self-end text-center">
                    <button className="btn reqbuttoncreate">Button</button>
                  </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div className="card">No project assigned yet</div>
      )}
    </>
  );
}

export default Stucapstone