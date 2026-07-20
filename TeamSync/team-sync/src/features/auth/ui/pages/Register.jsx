import {FiUser,FiMail,FiLock,} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineHub } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
 let {register,handleSubmit, onRegisterSubmit , errors , navigate ,watch} = useAuth();
 const password = watch("password", "");

  return (
    <div className="h-screen bg-[#131118] flex flex-col ">

      {/* Main Section */}

      <div className="flex flex-1">

        {/* LEFT PANEL */}

        <div
          className="hidden lg:flex relative w-[42%] border-r border-[#2b2537] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600&auto=format&fit=crop')",

          }}
        >
          {/* Overlay */}

          <div className="absolute inset-0 bg-[#101322]/65 backdrop-blur-[1px]" />

          <div className="relative z-10 flex flex-col w-full p-10">

            {/* Logo */}

            <h1 className="text-4xl font-bold text-white">
              Synthetix AI
            </h1>

            {/* Bottom Content */}

            <div>

              <p className="uppercase tracking-[6px] text-sm text-violet-300">
                ✦ Next-Gen Intelligence
              </p>

              <h2 className="mt-2 text-6xl leading-tight font-bold text-white">
                Accelerate your team's intelligence.
              </h2>

              <p className="mt-2 max-w-lg text-xl leading-9 text-gray-300">
                Connect your enterprise data to our specialized AI
                models and unlock unparalleled strategic insights
                in seconds.
              </p>

              <div className="mt-5 flex gap-14">

                <div>
                  <h3 className="text-4xl font-bold">
                    99.9%
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Uptime SLA
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold">
                    ISO
                  </h3>

                  <p className="text-gray-400 mt-1">
                    27001 Certified
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex flex-1 items-center justify-center px-10">

          <div className="w-full max-w-xl">

            <h1 className="text-2xl font-bold text-white">
              Create your account
            </h1>

            <p className="mt-2 text-xl text-gray-400">
              Experience the future of collaborative data intelligence.
            </p>

            {/* FORM */}

            <form
              onSubmit={handleSubmit(onRegisterSubmit)}
              className="mt-0.5 "
            >

              {/* Full Name */}

              <div>

                <label className="mb-3 block text-sm font-medium text-gray-300">
                  Full Name
                </label>

                <div className="flex items-center rounded-xl border border-[#48414f] bg-[#1b1823] px-5">

                  <FiUser className="text-gray-500 text-xl" />

                  <input
                    {...register("name", {
                      required: "Name is required",
                    })}
                    placeholder="Enter your full name"
                    className="w-full bg-transparent px-2 py-2 text-xl text-white outline-none"
                  />

                </div>

                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}

              </div>

              {/* Email */}

              <div>

                <label className="mb-3 block text-sm font-medium text-gray-300">
                  Email Address
                </label>

                <div className="flex items-center rounded-xl border border-[#48414f] bg-[#1b1823] px-5">

                  <FiMail className="text-gray-500 text-xl" />

                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    placeholder="name@company.com"
                    className="w-full bg-transparent px-2 py-2 text-xl text-white outline-none"
                  />

                </div>

                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}

              </div>

              {/* Password */}

              <div>

                <label className="mb-3 block text-sm font-medium text-gray-300">
                  Password
                </label>

                <div className="flex items-center rounded-xl border border-[#48414f] bg-[#1b1823] px-5">

                  <FiLock className="text-gray-500 text-xl" />

                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: 8,
                    })}
                    placeholder="••••••••"
                    className="w-full bg-transparent px-2 py-2 text-xl text-white outline-none"
                  />

                </div>

                {errors.password && (
                  <p className="mt-2 text-sm text-red-400">
                    Password must be at least 8 characters.
                  </p>
                )}
                                {/* Password Strength */}

                <div className="mt-2">
                  <div className="flex gap-2">

                    <div
                      className={`h-1 flex-1 rounded-full ${
                        password.length >= 2
                          ? "bg-violet-400"
                          : "bg-[#2b2537]"
                      }`}
                    />

                    <div
                      className={`h-1 flex-1 rounded-full ${
                        password.length >= 5
                          ? "bg-violet-400"
                          : "bg-[#2b2537]"
                      }`}
                    />

                    <div
                      className={`h-1 flex-1 rounded-full ${
                        password.length >= 8
                          ? "bg-violet-400"
                          : "bg-[#2b2537]"
                      }`}
                    />

                    <div
                      className={`h-1 flex-1 rounded-full ${
                        password.length >= 12
                          ? "bg-violet-400"
                          : "bg-[#2b2537]"
                      }`}
                    />

                  </div>

                  <p className="mt-2 text-sm text-violet-300">
                    {password.length >= 8
                      ? "Strong password"
                      : "Weak password"}
                  </p>
                </div>

              </div>

              {/* Terms */}

              <label className="flex items-start gap-3">

                <input
                  type="checkbox"
                  {...register("terms", {
                    required: true,
                  })}
                  className="my-1.5 h-5 w-5 accent-violet-500"
                />

                <span className="text-sm text-gray-400">
                  I agree to the{" "}
                  <span className="text-violet-300 cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-violet-300 cursor-pointer">
                    Privacy Policy
                  </span>.
                </span>

              </label>

              {errors.terms && (
                <p className="text-sm text-red-400">
                  Please accept Terms & Conditions.
                </p>
              )}

              {/* Button */}

              <button
                type="submit"
                className="block my-2 rounded-xl bg-gradient-to-r from-[#7b5ce6] to-[#b698ff] py-0.5 px-1 text-xl font-semibold text-[#1b1823] transition hover:opacity-90"
              >
                Create Account
              </button>

              {/* Divider */}

              <div className="flex items-center gap-5 my-5 ">

                <div className="h-px flex-1 bg-[#2b2537]" />

                <span className="text-sm  uppercase tracking-wider text-gray-500">
                  OR CONTINUE WITH
                </span>

                <div className="h-px flex-1 bg-[#2b2537]" />

              </div>

              {/* Social Buttons */}

              <div className="grid grid-cols-2 gap-5">

                <button
                  type="button"
                  className="flex items-center justify-center gap-3 py-1 rounded-xl border border-[#3b3544] bg-[#17141d]  text-xl transition hover:border-violet-500"
                >
                  <FcGoogle size={22} />
                  Google
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-3 py-1 rounded-xl border border-[#3b3544] bg-[#17141d]  text-xl transition hover:border-violet-500"
                >
                  <MdOutlineHub size={24} />
                  SSO
                </button>

              </div>

              {/* Login */}

              <p className=" text-center text-xl text-gray-400 mt-5">
                Already have an account?{" "}
                <span onClick={()=>navigate("/")} className="cursor-pointer font-semibold text-violet-300 hover:text-violet-400">
                  Log In
                </span>
              </p>
                          </form>

          </div>
        </div>
      </div>

      {/* Footer */}

      <footer className="border-t border-[#2b2537] bg-[#131118] px-10 py-6">

        <div className="flex flex-col items-center justify-between gap-6 text-sm text-gray-400 lg:flex-row">

          {/* Logo */}

          <h2 className="text-3xl font-bold text-white">
            Synthetix AI
          </h2>

          {/* Links */}

          <div className="flex flex-wrap items-center gap-8">

            <button className="transition hover:text-violet-300">
              Privacy Policy
            </button>

            <button className="transition hover:text-violet-300">
              Terms of Service
            </button>

            <button className="transition hover:text-violet-300">
              Security
            </button>

            <button className="transition hover:text-violet-300">
              System Status
            </button>

          </div>

          {/* Copyright */}

          <p className="text-center lg:text-right">
            © 2024 Synthetix AI. Enterprise Intelligence Platforms.
          </p>

        </div>

      </footer>

    </div>
  );
};

export default Register;