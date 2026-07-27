import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ModeToggle from "../components/generate/ModeToggle";
import TopicForm from "../components/generate/TopicForm";
import NotesForm from "../components/generate/NotesForm";

const Generate = () => {
  const [mode, setMode] = useState("topic");

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="mx-auto flex max-w-7xl justify-center"
      >

        <div className="glass w-full max-w-2xl rounded-[32px] p-10">

          <div className="mb-8 text-center">

            <h1 className="text-4xl font-black">
              Generate Learning Content
            </h1>

            <p className="mt-3 text-slate-500">
              Create personalized AI learning resources.
            </p>

          </div>

          <ModeToggle
            mode={mode}
            setMode={setMode}
          />

          <AnimatePresence mode="wait">

            <motion.div
              key={mode}
              initial={{
                opacity: 0,
                x: mode === "topic" ? -40 : 40,
                scale: .98
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1
              }}
              exit={{
                opacity: 0,
                x: mode === "topic" ? 40 : -40,
                scale: .98
              }}
              transition={{
                duration: .4
              }}
              className="mt-8"
            >
              {mode === "topic"
                ? <TopicForm />
                : <NotesForm />}
            </motion.div>

          </AnimatePresence>

        </div>

      </motion.div>

    </main>
  );
};

export default Generate;