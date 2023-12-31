import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const AddAClass = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://job-task-06-alemeno-server.vercel.app/postClasses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class Added successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      });

    console.log(data);
  };
  return (
    <div>
      <Helmet>
        <title>Meditation Center | Add a Class</title>
      </Helmet>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      <div className="flex">
        <img src="/images/person-3.jpg" className="w-1/2 h-[800px]" alt="" />

        <form
          className="flex flex-col gap-2 w-1/3 mx-auto justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* register your input into the hook by invoking the "register" function */}

          <input
            className="border rounded p-2 my-2"
            placeholder="Class Name "
            {...register("name")}
          />

          <input
            className="border rounded p-2 my-2"
            placeholder="image "
            {...register("image")}
          />
          <input
            className="border rounded p-2 my-2"
            placeholder="category "
            {...register("category")}
          />
          <input
            className="border rounded p-2 my-2"
            placeholder="Instructor  Name "
            {...register("InstructorName")}
          />
          <input
            className="border rounded p-2 my-2"
            placeholder="Instructor  Email "
            value={user.email}
            {...register("InstructorEmail")}
          />
          <input
            className="border rounded p-2 my-2"
            placeholder="Available seats "
            {...register("seats")}
          />
          <input
            className="border rounded p-2 my-2"
            placeholder="Price "
            {...register("price")}
          />
          <input
            className="border rounded p-2 my-2"
            value="pending"
            placeholder="status"
            {...register("status")}
          />

          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAClass;
