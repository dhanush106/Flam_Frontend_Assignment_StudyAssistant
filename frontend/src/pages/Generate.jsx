import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ModeToggle from "../components/generate/ModeToggle";
import TopicForm from "../components/generate/TopicForm";
import NotesForm from "../components/generate/NotesForm";

// Service (we'll create this later)
import { generateContent } from "../services/aiService";

const Generate = () => {
  const [mode, setMode] = useState("topic");

  const [topicData, setTopicData] = useState({
    topic: "",
    difficulty: "Beginner",
    depth: "Quick",
    roadmap: false,
    flashcards: false,
  });

  const [notesData, setNotesData] = useState({
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");


  const [result, setResult] = useState(null);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setError("");
      setResult(null);

      const payload =
        mode === "topic"
          ? {
              mode: "topic",
              ...topicData,
            }
          : {
              mode: "notes",
              notes: notesData.notes,
            };

      const response = await generateContent(payload);

      /*
        Expected backend response:

        {
            success:true,
            content: ...
        }
      */

      setResult(response.content);
    } 
    // catch (err) {
    //   setError(
    //     err?.response?.data?.message ||
    //       "Something went wrong. Please try again."
    //   );
    // } 
    catch (err) {
  console.log("========== AXIOS ERROR ==========");
  console.log(err);
  console.log(err.response);
  console.log(err.response?.data);
  console.log(err.message);

  setError(
    err.response?.data?.message ||
    err.message ||
    "Something went wrong."
  );
}
    finally {
      setLoading(false);
    }
  };

  const isDisabled =
    mode === "topic"
      ? topicData.topic.trim() === ""
      : notesData.notes.trim() === "";

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        <div className="glass rounded-[32px] p-8 md:p-10">

          <div className="mb-8 text-center">

            <h1 className="text-4xl font-black text-slate-900">
              Generate Learning Content
            </h1>

            <p className="mt-3 text-slate-500">
              Generate AI-powered learning resources from a topic or your notes.
            </p>

          </div>

          <ModeToggle mode={mode} setMode={setMode} />

          <AnimatePresence mode="wait">

            <motion.div
              key={mode}
              initial={{
                opacity: 0,
                x: mode === "topic" ? -40 : 40,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: mode === "topic" ? 40 : -40,
                scale: 0.98,
              }}
              transition={{ duration: 0.35 }}
              className="mt-8"
            >
              {mode === "topic" ? (
                <TopicForm
                  data={topicData}
                  setData={setTopicData}
                  loading={loading}
                  disabled={isDisabled}
                  onGenerate={handleGenerate}
                />
              ) : (
                <NotesForm
                  data={notesData}
                  setData={setNotesData}
                  loading={loading}
                  disabled={isDisabled}
                  onGenerate={handleGenerate}
                />
              )}
            </motion.div>

          </AnimatePresence>

          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="mb-4 text-xl font-bold">
                Generated Content
              </h2>

              <pre className="whitespace-pre-wrap text-sm text-slate-700">
                {typeof result === "string"
                  ? result
                  : JSON.stringify(result, null, 2)}
              </pre>

            </div>
          )}

        </div>
      </motion.div>

    </main>
  );
};

export default Generate;