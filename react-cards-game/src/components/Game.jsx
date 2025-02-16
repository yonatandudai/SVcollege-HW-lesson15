import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card,{convertValue} from './Card';

export default function Game() {
    const location = useLocation();
    const navigate = useNavigate();
    const { player, computerCards } = location.state || {};

    // Initialize state for player's and computer's cards
    const [playerCards, setPlayerCards] = useState(player.cards);
    const [computerDeck, setComputerDeck] = useState(computerCards);

    // Initialize state for player's and computer's scores
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [rounds, setRounds] = useState(0);

    // Function to handle the next card
    function handleNext() {
    if (playerCards.length > 0 && computerDeck.length > 0) {
        const playerTopCard = playerCards[0];
        const computerTopCard = computerDeck[0];

        const playerValue = convertValue(playerTopCard.value);
        const computerValue = convertValue(computerTopCard.value);
        
        if (playerValue > computerValue) {
            setPlayerScore(playerScore + 1);
        } else if (computerValue > playerValue) {
            setComputerScore(computerScore + 1);
        }

        setPlayerCards(playerCards.slice(1));
        setComputerDeck(computerDeck.slice(1));
        setRounds(rounds + 1);

        if (rounds + 1 >= 26) {
            player.wins = player.wins || 0;
            player.losses = player.losses || 0;

            if (playerScore > computerScore) {
                player.wins += 1;
            } else {
                player.losses += 1;
            }
            navigate('/finish-game', { state: { playerScore, computerScore, player } });
        }
    } else {
        console.log("No more cards left");
    }
    }

    const playerTopCard = playerCards[0];
    const computerTopCard = computerDeck[0];
    
    return (
        <div className="flex items-start justify-center h-screen bg-white">
            <div className="absolute top-0 left-20 p-6">
                <h2 className="text-xl">Computer Score: {computerScore}</h2>
                <h2 className="text-xl mb-4">Player Score: {playerScore}</h2>
            </div>
            <div className="border border-lime-600 p-8 w-130 h-130 flex flex-col relative">
                <div className="absolute top-4 left-4 text-black text-3xl font-bold">
                    COMPUTER
                </div>
                <div className="flex flex-col justify-center items-center h-96 mt-15">
                {computerTopCard && <Card card={computerTopCard} />}
                {playerTopCard && <Card card={playerTopCard} />}</div>
                <div className="absolute bottom-6 right-6 text-black text-4xl font-bold">
                    YOU
                </div>
                <button
                    onClick={handleNext}
                    className="absolute bottom-4 left-4 bg-blue-500 text-white text-4xl px-6 py-2 w-30 h-15 ml-5 rounded-lg">
                        next
                </button>
            </div>
        </div>
    );
}
