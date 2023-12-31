import Link from "next/link";
import useLogin from "src/hooks/useLogin";

export default function Login({ name }) {
  const { handleSubmit, register, handleFormSubmit } = useLogin();

  return (
    <div className="flex h-screen bg-slate-100">
      <div className="flex flex-col md:flex-row  w-full max-w-xl m-auto items-center shadow-md shadow-slate-900 bg-white rounded-lg">
        <div className="">
          <img
            className=""
            src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          />
        </div>
        <div className="px-3 text-lg">
          <div className="text-4xl pb-4">LOGIN</div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="w-full border-b-2 border-b-slate-700 ">
              <input
                placeholder="Email"
                className="pt-4"
                {...register("email")}
              />
            </div>
            <div className="w-full  border-b-2 border-b-slate-700 ">
              <input
                placeholder="Password"
                className="pt-4"
                {...register("password")}
              />
            </div>
            <div className=" p-2 mt-3  border border-slate-500 rounded-md  w-fit ">
              <input type="submit" value="Login" className="cursor-pointer" />
            </div>
          </form>
          <Link href="/signup">
            <div className="text-sm pt-2 text-slate-600 cursor-pointer font-medium hover:text-slate-900 w-fit">
              Create One?
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const name = "prathmesh";
  return {
    props: {
      name,
    },
  };
}
