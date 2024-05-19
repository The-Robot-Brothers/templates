export default function Login2() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-login bg-no-repeat bg-cover">
      <form className="bg-[#00000030] backdrop-blur-lg p-8 rounded-2xl min-w-[420px] grid gap-4 border border-gray-200 shadow-md">
        <h1 className="text-4xl text-center font-bold">Login</h1>

        <input
          autoFocus
          type="text"
          placeholder="Username"
          required
          className="bg-transparent w-full h-12 rounded-full px-4 border border-gray-200 placeholder-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="bg-transparent w-full h-12 rounded-full px-4 border border-gray-200 placeholder-white outline-none"
        />

        <div className="flex justify-between">
          <label>
            <input type="checkbox" className="outline-none" /> Remenber me
          </label>

          <a href="#" className="cursor-pointer outline-none">Forgot password?</a>
        </div>

        <button
          type="submit"
          className="w-full h-11 bg-white text-black font-medium rounded-full outline-none"
        >
          Login
        </button>
      </form>
    </main>
  )
}
