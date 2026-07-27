import GenerateButton from "./GenerateButton";

const NotesForm = ({
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
      {/* Notes */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Notes
        </label>

        <textarea
          rows={10}
          value={data.notes}
          onChange={(e) =>
            setData({
              ...data,
              notes: e.target.value,
            })
          }
          placeholder="Paste your notes here..."
          className="
            min-h-[260px]
            w-full
            resize-none
            rounded-2xl
            border
            border-slate-200
            bg-white/80
            p-5
            shadow-sm
            outline-none
            transition-all
            duration-300
            placeholder:text-slate-400
            hover:shadow-md
            focus:border-sky-400
            focus:ring-4
            focus:ring-sky-100
          "
        />

        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-slate-400">
            Supports large notes
          </span>

          <span className="text-sm text-slate-400">
            {data.notes.length} characters
          </span>
        </div>
      </div>

      <GenerateButton
        loading={loading}
        disabled={disabled}
      />
    </form>
  );
};

export default NotesForm;