import GenerateButton from "./GenerateButton";

const TopicForm = () => {
  return (
    <form className="space-y-8">

      {/* Topic */}

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Topic
        </label>

        <input
          type="text"
          placeholder="e.g. Operating Systems"
          className="
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-white/80
            px-5
            py-3.5
            shadow-sm
            outline-none
            transition-all
            duration-300
            placeholder:text-slate-400
            focus:border-emerald-400
            focus:ring-4
            focus:ring-emerald-100
          "
        />

      </div>

      {/* Selects */}

      <div className="grid gap-5 md:grid-cols-2">

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Difficulty
          </label>

          <select
            className="
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-5
              py-3.5
              shadow-sm
              outline-none
              transition-all
              duration-300
              focus:border-emerald-400
              focus:ring-4
              focus:ring-emerald-100
            "
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

        </div>

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Depth
          </label>

          <select
            className="
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-5
              py-3.5
              shadow-sm
              outline-none
              transition-all
              duration-300
              focus:border-sky-400
              focus:ring-4
              focus:ring-sky-100
            "
          >
            <option>Quick</option>
            <option>Standard</option>
            <option>Deep</option>
          </select>

        </div>

      </div>

      {/* Options */}

      <div>

        <h3 className="mb-4 text-sm font-semibold text-slate-700">
          Generate Options
        </h3>

        <div className="grid gap-4 md:grid-cols-2">

          <label className="
            flex
            cursor-pointer
            items-center
            gap-4
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            transition
            hover:border-emerald-300
            hover:shadow-md
          ">
            <input type="checkbox" className="h-5 w-5 accent-emerald-500" />
            <span className="font-medium">Roadmap</span>
          </label>

          <label className="
            flex
            cursor-pointer
            items-center
            gap-4
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            transition
            hover:border-sky-300
            hover:shadow-md
          ">
            <input type="checkbox" className="h-5 w-5 accent-sky-500" />
            <span className="font-medium">Flashcards</span>
          </label>

        </div>

      </div>

      <GenerateButton />

    </form>
  );
};

export default TopicForm;