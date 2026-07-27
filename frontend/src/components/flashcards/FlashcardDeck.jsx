import { useEffect, useMemo, useState } from "react";

import Flashcard from "./Flashcard";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import CompletionScreen from "./CompletionScreen";

const FlashcardDeck = ({ flashcards = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [completedCards, setCompletedCards] = useState([]);

  const currentCard = flashcards[currentIndex];

  const completed = currentIndex >= flashcards.length;

  const progress = useMemo(() => {
    if (!flashcards.length) return 0;

    return Math.round(
      (completedCards.length / flashcards.length) * 100
    );
  }, [completedCards, flashcards]);

  const nextCard = () => {
    if (completed) return;

    if (!completedCards.includes(currentIndex)) {
      setCompletedCards((prev) => [...prev, currentIndex]);
    }

    setFlipped(false);

    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(flashcards.length);
    }
  };

  const previousCard = () => {
    if (currentIndex === 0) return;

    setFlipped(false);
    setCurrentIndex((prev) => prev - 1);
  };

  const flipCard = () => {
    if (!completed) {
      setFlipped((prev) => !prev);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setFlipped(false);
    setCompletedCards([]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case " ":
          e.preventDefault();
          flipCard();
          break;

        case "ArrowRight":
          nextCard();
          break;

        case "ArrowLeft":
          previousCard();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [currentIndex, flipped, completed]);

  if (completed) {
    return (
      <CompletionScreen
        totalCards={flashcards.length}
        restart={restart}
      />
    );
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col px-6 py-12">

      {/* Heading */}

      <div className="mb-10">

        <h1 className="text-5xl font-black text-slate-800">
          Flashcards
        </h1>

        <p className="mt-3 text-slate-500">
          Click the card or press SPACE to flip.
        </p>

      </div>

      {/* Progress */}

      <ProgressBar
        current={currentIndex + 1}
        total={flashcards.length}
        progress={progress}
      />

      {/* Card */}

      <div className="my-12 flex justify-center">

        <Flashcard
          flashcard={currentCard}
          flipped={flipped}
          onFlip={flipCard}
        />

      </div>

      {/* Controls */}

      <Controls
        current={currentIndex}
        total={flashcards.length}
        flipped={flipped}
        onFlip={flipCard}
        onNext={nextCard}
        onPrevious={previousCard}
      />

    </div>
  );
};

export default FlashcardDeck;