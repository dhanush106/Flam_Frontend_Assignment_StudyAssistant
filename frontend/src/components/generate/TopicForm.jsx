import GenerateButton from "./GenerateButton";

const TopicForm = ({
  data,
  setData,
  loading,
  disabled,
  onGenerate,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {/* Topic */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Topic
        </label>

        <input
          type="text"
          placeholder="e.g. Operating Systems"
          value={data.topic}
          onChange={(e) =>
            setData({
              ...data,
              topic: e.target.value,
            })
          }
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
            hover:shadow-md
            focus:border-emerald-400
            focus:ring-4
            focus:ring-emerald-100
          "
        />
      </div>

      {/* Difficulty & Depth */}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Difficulty
          </label>

          <select
            value={data.difficulty}
            onChange={(e) =>
              setData({
                ...data,
                difficulty: e.target.value,
              })
            }
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
              hover:shadow-md
              focus:border-emerald-400
              focus:ring-4
              focus:ring-emerald-100
            "
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Depth
          </label>

          <select
            value={data.depth}
            onChange={(e) =>
              setData({
                ...data,
                depth: e.target.value,
              })
            }
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
              hover:shadow-md
              focus:border-sky-400
              focus:ring-4
              focus:ring-sky-100
            "
          >
            <option value="Quick">Quick</option>
            <option value="Standard">Standard</option>
            <option value="Deep">Deep</option>
          </select>
        </div>
      </div>

      {/* Generate Options */}

      <div>
        <h3 className="mb-4 text-sm font-semibold text-slate-700">
          Generate Options
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Roadmap */}

          <label
            className="
              flex
              cursor-pointer
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              transition-all
              duration-300
              hover:border-emerald-300
              hover:shadow-md
            "
          >
            <input
              type="checkbox"
              checked={data.roadmap}
              onChange={(e) =>
                setData({
                  ...data,
                  roadmap: e.target.checked,
                })
              }
              className="h-5 w-5 accent-emerald-500"
            />

            <span className="font-medium">
              Roadmap
            </span>
          </label>

          {/* Flashcards */}

          <label
            className="
              flex
              cursor-pointer
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              transition-all
              duration-300
              hover:border-sky-300
              hover:shadow-md
            "
          >
            <input
              type="checkbox"
              checked={data.flashcards}
              onChange={(e) =>
                setData({
                  ...data,
                  flashcards: e.target.checked,
                })
              }
              className="h-5 w-5 accent-sky-500"
            />

            <span className="font-medium">
              Flashcards
            </span>
          </label>
        </div>
      </div>

      <GenerateButton
        loading={loading}
        disabled={disabled}
      />
    </form>
  );
};

export default TopicForm;