import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* Background */}

      <div className="absolute -left-52 top-0 h-[500px] w-[500px] rounded-full bg-emerald-300/20 blur-[170px]" />

      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-sky-300/20 blur-[180px]" />

      <div className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-amber-300/20 blur-[170px]" />

      {/* Hero */}

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        {/* Badge */}

        <div className="glass rounded-full border border-white/60 px-6 py-2 shadow-lg">

          <p className="flex items-center gap-2 text-sm font-medium text-slate-700">

            <Sparkles
              size={16}
              className="text-emerald-600"
            />

            AI Powered Learning Platform

          </p>

        </div>

        {/* Heading */}

        <h1 className="gradient-text mt-10 max-w-5xl text-6xl font-black leading-tight lg:text-8xl">

          Learn Anything

          <br />

          Smarter & Faster

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-600">

          Generate personalized learning roadmaps, AI summaries and
          interactive flashcards that help you master any topic effortlessly.

        </p>

        {/* Buttons */}

        <div className="mt-14 flex flex-wrap justify-center gap-6">

          {/* Start Learning */}

          <Link
            to="/generate"
            className="
            group
            relative
            overflow-hidden
            rounded-full
            gradient-button
            px-10
            py-4
            font-semibold
            text-white
            shadow-xl
            "
          >

            <span className="flex items-center">

              <span>

                Start Learning

              </span>

              <ArrowRight
                size={20}
                className="
                ml-3
                -translate-x-8
                opacity-0
                transition-all
                duration-500
                group-hover:translate-x-0
                group-hover:opacity-100
                "
              />

            </span>

          </Link>

          {/* About */}

          <Link
            to="/about"
            className="
            group
            relative
            overflow-hidden
            rounded-full
            border
            border-slate-300
            px-10
            py-4
            font-semibold
            text-slate-700
            transition-all
            duration-300
            "
          >

            {/* Four Corner Fill */}

            <span className="absolute left-0 top-0 h-0 w-0 rounded-full bg-emerald-500 transition-all duration-500 group-hover:h-full group-hover:w-full" />

            <span className="absolute right-0 top-0 h-0 w-0 rounded-full bg-emerald-500 transition-all duration-500 delay-75 group-hover:h-full group-hover:w-full" />

            <span className="absolute bottom-0 left-0 h-0 w-0 rounded-full bg-emerald-500 transition-all duration-500 delay-100 group-hover:h-full group-hover:w-full" />

            <span className="absolute bottom-0 right-0 h-0 w-0 rounded-full bg-emerald-500 transition-all duration-500 delay-150 group-hover:h-full group-hover:w-full" />

            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">

              About

            </span>

          </Link>

        </div>

      </section>

    </main>
  );
};

export default Home;