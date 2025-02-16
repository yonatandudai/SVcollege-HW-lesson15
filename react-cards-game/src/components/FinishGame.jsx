import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createDeck, shuffleDeck } from './Deck';

export default function FinishGame() {
    const location = useLocation();
    const navigate = useNavigate();

    const { playerScore, computerScore, player } = location.state || {};
    const win = playerScore > computerScore;

    const wins = player.wins || 0;
    const losses = player.losses || 0;

     // Function to reshuffle the cards and start a new game
     const handlePlayAgain = () => {
        let newDeck = createDeck();
        newDeck = shuffleDeck(newDeck);
        const newPlayerCards = newDeck.slice(0, 26);
        const newComputerCards = newDeck.slice(26, 52);

        navigate('/game', { state: { player: { ...player, cards: newPlayerCards }, computerCards: newComputerCards } });
    };

    return (
        <div className="flex flex-col items-center justify-start h-screen">
            <div className="border border-lime-600 p-8 w-100 h-100 rounded-lg shadow-md text-center mt-10">
            <h1 className="text-[100px] text-red-500 mt-15 mb-4">
                {win ? "WIN" : "LOSE"}
            </h1>
            <p className="text-xl">Wins: {wins}</p>
            <p className="text-xl">Losses: {losses}</p>
            <button
                onClick={handlePlayAgain}
                className="bg-sky-600 text-white text-4xl px-4 py-2 w-50 h-20 rounded-md mt-15 cursor-pointer">
                Again
            </button>
            </div>
        </div>
    );
}