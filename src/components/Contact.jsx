import React from "react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <div>
      <div className="hero min-h-[600px] bg-base-200 mt-16 ">
        <div className="hero-content flex-col lg:flex-row-reverse border-y-4 p-16 border-sky-500">
          <div className="text-center lg:text-left">
            <SectionTitle heading={"Contact"}></SectionTitle>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
