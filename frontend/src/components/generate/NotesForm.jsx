import GenerateButton from "./GenerateButton";

const NotesForm = () => {
  return (
    <form className="space-y-8">

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Notes
        </label>

        <textarea
          rows={10}
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
            focus:border-sky-400
            focus:ring-4
            focus:ring-sky-100
          "
        />

        <div className="mt-2 flex justify-end text-sm text-slate-400">
          0 / 5000
        </div>

      </div>

      <GenerateButton />

    </form>
  );
};

export default NotesForm;