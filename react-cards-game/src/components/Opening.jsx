import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { createDeck, shuffleDeck } from "./Deck";

export default function Opening() {
    const [name, setName] = useState("");
    const [player, setPlayer] = useState(null);
    const [computerCards, setComputerCards] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setName(event.target.value);
    }

    function handleStartGame() {
        if (name === "") {
            alert("Please enter your name");
        } else {
            alert("Welcome to War of Cards, " + name);
            let deck = createDeck();
            const playerCards = [];
            for (let i = 0; i < 26; i++) {
                const randomIndex = Math.floor(Math.random() * deck.length);
                // Remove the card from the deck and add it to the player's hand
                const card = deck.splice(randomIndex, 1).pop();
                playerCards.push(card);
            }
            const playerData = { name: name, cards: playerCards, wins: 0, losses: 0 };
            setPlayer(playerData);
            //shuffle the deck before giving it to the computer
            deck = shuffleDeck(deck);
            setComputerCards(deck);
            navigate('/game', { state: { player: { ...player, cards: playerCards }, computerCards: deck } });
        }
    }
    
    return (
        <div className="flex items-start justify-center min-h-screen bg-white overflow-hidden">
            <div className="border border-lime-600 p-8 rounded-lg shadow-md text-center">
                <h1 className="text-sky-700 text-3xl font-bold mb-15">Ready for WAR</h1>
                <input
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full max-w-sm py-4 border border-lime-600 rounded-md mb-20 text-3xl text-center placeholder-black text-black focus:border-lime-600 focus:outline-none"/>
                <button
                    onClick={handleStartGame}
                    className="bg-sky-600 text-white px-20 py-5 rounded-md text-3xl cursor-pointer mb-15">
                    Start
                </button>
            </div>
        </div>
    );
}