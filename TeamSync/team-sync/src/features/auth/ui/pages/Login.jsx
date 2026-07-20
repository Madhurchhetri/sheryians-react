import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  let { register, handleSubmit, onLoginSubmit, errors, navigate, watch } =
    useAuth();
  const password = watch("password", "");

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-[#131118] text-white">
      {/* Left Glow */}
      <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[130px]" />

      {/* Right Decoration */}
      <div className="absolute bottom-20 right-24 hidden h-64 w-56 rounded-3xl bg-[#1b1823] lg:flex items-center justify-center">
        <div className="h-28 w-28 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 blur-lg opacity-70"></div>
      </div>

      <div className="w-[430px] rounded-3xl border border-white/10 bg-[#1b1823]/95 p-8 shadow-2xl backdrop-blur-xl">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7C5CE4] text-2xl">
            ✦
          </div>

          <h1 className="mt-5 text-4xl font-semibold">Synthetix AI</h1>

          <p className="mt-2 text-sm text-zinc-400">
            Sign in to your workspace
          </p>
        </div>

        {/* Social Buttons */}

        <div className="mt-8 grid grid-cols-2 gap-4">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-[#25212d] py-3 transition hover:bg-[#302b3a]"
          >
            <FcGoogle size={20} />
            GOOGLE
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-[#25212d] py-3 transition hover:bg-[#302b3a]"
          >
            <FaGithub />
            GITHUB
          </button>
        </div>

        {/* Divider */}

        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-zinc-700" />

          <span className="px-4 text-sm text-zinc-500">
            or continue with email
          </span>

          <div className="h-px flex-1 bg-zinc-700" />
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-5">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-wider text-zinc-400">
              Email Address
            </label>

            <input
              type="email"
              placeholder="name@company.com"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full rounded-xl border border-zinc-700 bg-[#14111A] px-4 py-3 outline-none transition focus:border-purple-500"
            />

            {errors.email && (
              <p className="mt-1 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <label className="text-xs uppercase tracking-wider text-zinc-400">
                Password
              </label>

              <button
                type="button"
                className="text-xs text-purple-400 hover:text-purple-300"
              >
                Forgot password?
              </button>
            </div>

            <input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full rounded-xl border border-zinc-700 bg-[#14111A] px-4 py-3 outline-none transition focus:border-purple-500"
            />

            {errors.password && (
              <p className="mt-1 text-xs text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          <label className="flex items-center gap-3 text-sm text-zinc-400">
            <input
              type="checkbox"
              {...register("remember")}
              className="accent-purple-600"
            />
            Stay signed in
          </label>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#7C5CE4] py-4 font-medium transition hover:bg-[#8c6df5]"
          >
            Sign In
            <FiLogIn size={18} />
          </button>
        </form>

        <div className="my-8 h-px bg-zinc-700" />

        <p className="text-center text-sm text-zinc-400">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="cursor-pointer font-semibold text-white hover:text-purple-400"
          >
            Sign Up
          </span>
        </p>
      </div>

      {/* Footer */}

      <div className="mt-2 text-center text-xs text-zinc-500">
        <p>© 2024 Synthetix AI. Enterprise Intelligence Platforms.</p>

        <div className="mt-2 flex justify-center gap-6">
          <button>Privacy Policy</button>
          <button>Terms of Service</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
