class GameState {
    constructor() {
        this.currentScene = "start";
        this.carLoveMeter = 0;
        this.youtubeSadness = 0;
        this.scenes = this.createScenes();
        this.images = {
            "thebsot_pirate": "images/thebsot_pirate.jpg",
            "car": "images/car.jpg",
            "youtube": "images/youtube.jpg"
        };
    }

    createScenes() {
        return {
            "start": {
                text: "You are TheBSOT, a popular YouTuber who's tired of making content. All you want to do is make love to cars. What do you do?",
                options: [
                    { text: "Continue making YouTube videos", nextScene: "continue_youtube", effects: { youtubeSadness: 20 } },
                    { text: "Quit YouTube and pursue your car passion", nextScene: "quit_youtube", effects: { carLoveMeter: 20 } },
                    { text: "Try to balance both", nextScene: "balance" },
                    { text: "Move to the woods and become a hermit", nextScene: "hermit" },
                    { text: "Kill ur plants", nextScene: "kys" }
                ],
                image: "thebsot_pirate"
            },
            "continue_youtube": {
                text: "You decide to keep making videos. Your subscribers are happy, but your car love meter decreases. The sadness grows...",
                options: [
                    { text: "Keep going", nextScene: "keep_going", effects: { youtubeSadness: 30, carLoveMeter: -10 } },
                    { text: "Change your mind", nextScene: "change_mind" },
                    { text: "Make a video about your sadness", nextScene: "sad_video", effects: { youtubeSadness: 25 } }
                ],
                image: "youtube"
            },
            "keep_going": {
                text: "You keep grinding out videos. The algorithm is pleased, but you feel emptier inside. Your car love meter is at an all-time low. Do you keep going?",
                options: [
                    { text: "Yes, for the fans", nextScene: "algorithm_burnout", effects: { youtubeSadness: 40, carLoveMeter: -10 } },
                    { text: "No, I need a change", nextScene: "change_mind" },
                    { text: "Make a video about cars", nextScene: "car_video", effects: { youtubeSadness: 15 } }
                ],
                image: "youtube"
            },
            "algorithm_burnout": {
                text: "You push yourself for the algorithm. Your car love meter is dangerously low, and your sadness is high. Do you take a break or keep pushing?",
                options: [
                    { text: "Take a break", nextScene: "take_break" },
                    { text: "Keep pushing", nextScene: "keep_pushing", effects: { youtubeSadness: 50 } }
                ],
                image: "youtube"
            },
            "take_break": {
                text: "You take a break and reflect. Maybe you can find a way to balance your passions?",
                options: [
                    { text: "Try to balance both", nextScene: "balance" },
                    { text: "Go back to YouTube", nextScene: "continue_youtube" },
                    { text: "Go to cars", nextScene: "quit_youtube" }
                ],
                image: "thebsot_pirate"
            },
            "keep_pushing": {
                text: "You keep pushing. Your health suffers, but you recover. What next?",
                options: [
                    { text: "Take a break", nextScene: "take_break" },
                    { text: "Keep pushing", nextScene: "algorithm_burnout", effects: { youtubeSadness: 60 } },
                    { text: "Make a video about your health", nextScene: "sad_video", effects: { youtubeSadness: 35 } }
                ],
                image: "youtube"
            },
            "balance": {
                text: "You try to balance both. Maybe you can make car-related content?",
                options: [
                    { text: "Start a car review channel", nextScene: "car_review" },
                    { text: "Keep your current content but add car segments", nextScene: "car_segments", effects: { youtubeSadness: 20 } },
                    { text: "Let chat decide your fate", nextScene: "chat_fate", effects: { youtubeSadness: 15 } }
                ],
                image: "thebsot_pirate"
            },
            "car_review": {
                text: "You start a car review channel. It blows up! You are now the top car YouTuber, and your car love meter is maxed out! What next?",
                options: [
                    { text: "Keep reviewing cars", nextScene: "ending_car_youtuber" },
                    { text: "Try to balance again", nextScene: "balance" }
                ],
                image: "car"
            },
            "car_segments": {
                text: "You add car segments to your videos. Your audience is confused, but some love it. What next?",
                options: [
                    { text: "Keep adding segments", nextScene: "ending_hybrid_content" },
                    { text: "Try to balance again", nextScene: "balance" }
                ],
                image: "car"
            },
            "chat_fate": {
                text: "You let chat decide your fate. They vote for you to eat a car. You try, but break your teeth. What next?",
                options: [
                    { text: "Keep trying", nextScene: "ending_car_eater" },
                    { text: "Try to balance again", nextScene: "balance" }
                ],
                image: "car"
            },
            "change_mind": {
                text: "You decide to change your mind and pursue your car passion!",
                options: [
                    { text: "Go to the garage", nextScene: "quit_youtube" },
                    { text: "Buy a toy car instead", nextScene: "toy_car" }
                ],
                image: "car"
            },
            "toy_car": {
                text: "You buy a toy car. It's not the same, but you make a viral unboxing video and become a toy influencer. What next?",
                options: [
                    { text: "Keep making toy videos", nextScene: "ending_toy_influencer" },
                    { text: "Try to balance again", nextScene: "balance" }
                ],
                image: "car"
            },
            "quit_youtube": {
                text: "You quit YouTube to pursue your true passion. You find yourself in a garage full of beautiful cars...",
                options: [
                    { text: "Approach the nearest car", nextScene: "car_approach", effects: { carLoveMeter: 30 } },
                    { text: "Have second thoughts", nextScene: "second_thoughts" },
                    { text: "Start a car cult", nextScene: "car_cult" }
                ],
                image: "car"
            },
            "car_approach": {
                text: "You approach the car. It's a beautiful machine. Your car love meter increases!",
                options: [
                    { text: "Express your love", nextScene: "express_love" },
                    { text: "Take it for a drive", nextScene: "drive_car" },
                    { text: "Lick the car", nextScene: "lick_car" }
                ],
                image: "car"
            },
            "express_love": {
                text: "You confess your love to the car. It doesn't respond, but you feel at peace. What next?",
                options: [
                    { text: "Keep loving cars", nextScene: "ending_car_lover" },
                    { text: "Try to balance again", nextScene: "balance" }
                ],
                image: "car"
            },
            "drive_car": {
                text: "You take the car for a drive. The wind in your hair, the engine's roar... pure bliss! What next?",
                options: [
                    { text: "Keep driving", nextScene: "ending_car_driver" },
                    { text: "Try to balance again", nextScene: "balance" }
                ],
                image: "car"
            },
            "lick_car": {
                text: "You lick the car. It's cold and metallic. You get a million views on TikTok. What next?",
                options: [
                    { text: "Keep licking cars", nextScene: "ending_car_licker" },
                    { text: "Try to balance again", nextScene: "balance" }
                ],
                image: "car"
            },
            "car_cult": {
                text: "You start a car cult. People worship you as the Car Prophet. What next?",
                options: [
                    { text: "Keep the cult going", nextScene: "ending_car_cult" },
                    { text: "Try to balance again", nextScene: "balance" }
                ],
                image: "car"
            },
            "second_thoughts": {
                text: "You have second thoughts. Maybe YouTube wasn't so bad after all...",
                options: [
                    { text: "Return to YouTube", nextScene: "return_youtube" },
                    { text: "Stay with the cars", nextScene: "stay_with_cars" },
                    { text: "Start a Sea of Thieves channel", nextScene: "sea_of_thieves" }
                ],
                image: "youtube"
            },
            "return_youtube": {
                text: "You return to YouTube, but your heart isn't in it. Your fans notice, and your channel slowly fades away. What next?",
                options: [
                    { text: "Keep trying", nextScene: "ending_failed_return" },
                    { text: "Try to balance again", nextScene: "balance" }
                ],
                image: "youtube"
            },
            "stay_with_cars": {
                text: "You stay with the cars. You become a renowned car restorer, and your happiness soars! What next?",
                options: [
                    { text: "Keep restoring cars", nextScene: "ending_car_restorer" },
                    { text: "Try to balance again", nextScene: "balance" }
                ],
                image: "car"
            },
            "sea_of_thieves": {
                text: "You start a Sea of Thieves channel. You become the #1 pirate streamer, but you still dream of cars at night. What next?",
                options: [
                    { text: "Keep streaming", nextScene: "ending_pirate_streamer" },
                    { text: "Try to balance again", nextScene: "balance" }
                ],
                image: "thebsot_pirate"
            },
            "hermit": {
                text: "You move to the woods and become a hermit. You talk to squirrels about cars. What next?",
                options: [
                    { text: "Keep talking to squirrels", nextScene: "ending_hermit" },
                    { text: "Try to balance again", nextScene: "balance" }
                ],
                image: "thebsot_pirate"
            },
            "sad_video": {
                text: "You make a video about your sadness. It goes viral and you get a Netflix documentary. What next?",
                options: [
                    { text: "Keep making sad videos", nextScene: "ending_sad_documentary" },
                    { text: "Try to balance again", nextScene: "balance" }
                ],
                image: "youtube"
            },
            "car_video": {
                text: "You make a video about cars. It flops, but you gain a small, loyal following of car lovers. What next?",
                options: [
                    { text: "Keep making car videos", nextScene: "ending_niche_car" },
                    { text: "Try to balance again", nextScene: "balance" }
                ],
                image: "car"
            },
            "kys": {
                text: "You kill ur plants. What next?",
                options: [
                    { text: "Play Again", nextScene: "start", effects: { carLoveMeter: 0, youtubeSadness: 0 } }
                ],
                image: "thebsot_pirate"
            },
            "ending_car_youtuber": {
                text: "You become the most successful car YouTuber ever! Your channel grows to millions of subscribers, and you get to drive and review the most amazing cars. You've found the perfect balance between your love for cars and content creation. THE END",
                options: [
                    { text: "Play Again", nextScene: "start", effects: { carLoveMeter: 0, youtubeSadness: 0 } }
                ],
                image: "car"
            },
            "ending_hybrid_content": {
                text: "You create a unique style of content that combines your gaming personality with car enthusiasm. Your audience grows to appreciate both sides of you, and you become known for your innovative content. THE END",
                options: [
                    { text: "Play Again", nextScene: "start", effects: { carLoveMeter: 0, youtubeSadness: 0 } }
                ],
                image: "youtube"
            },
            "ending_car_eater": {
                text: "You become famous for your bizarre car-eating attempts. Your dental bills are astronomical, but your channel thrives on the absurdity. You're known as the YouTuber who tried to eat a car. THE END",
                options: [
                    { text: "Play Again", nextScene: "start", effects: { carLoveMeter: 0, youtubeSadness: 0 } }
                ],
                image: "car"
            },
            "ending_toy_influencer": {
                text: "You become the top toy car influencer on YouTube. Your collection grows to thousands of miniature cars, and you're known for your detailed reviews of toy vehicles. THE END",
                options: [
                    { text: "Play Again", nextScene: "start", effects: { carLoveMeter: 0, youtubeSadness: 0 } }
                ],
                image: "car"
            },
            "ending_car_lover": {
                text: "You dedicate your life to cars, becoming a famous car enthusiast. You're known for your emotional connections with vehicles, and your garage becomes a pilgrimage site for car lovers. THE END",
                options: [
                    { text: "Play Again", nextScene: "start", effects: { carLoveMeter: 0, youtubeSadness: 0 } }
                ],
                image: "car"
            },
            "ending_car_driver": {
                text: "You become a professional race car driver, competing in major events worldwide. Your YouTube channel documents your racing career, and you become a legend in both worlds. THE END",
                options: [
                    { text: "Play Again", nextScene: "start", effects: { carLoveMeter: 0, youtubeSadness: 0 } }
                ],
                image: "car"
            },
            "ending_car_licker": {
                text: "You become a viral sensation for licking cars. Your TikTok fame leads to a Netflix special about your unique relationship with automobiles. THE END",
                options: [
                    { text: "Play Again", nextScene: "start", effects: { carLoveMeter: 0, youtubeSadness: 0 } }
                ],
                image: "car"
            },
            "ending_car_cult": {
                text: "Your car cult grows to thousands of followers. You establish a compound where people worship cars and you as their prophet. THE END",
                options: [
                    { text: "Play Again", nextScene: "start", effects: { carLoveMeter: 0, youtubeSadness: 0 } }
                ],
                image: "car"
            },
            "ending_failed_return": {
                text: "Your return to YouTube is unsuccessful. Your channel slowly fades away, but you find peace in knowing you tried. THE END",
                options: [
                    { text: "Play Again", nextScene: "start", effects: { carLoveMeter: 0, youtubeSadness: 0 } }
                ],
                image: "youtube"
            },
            "ending_car_restorer": {
                text: "You become a master car restorer, bringing classic cars back to life. Your work is featured in museums and car shows worldwide. THE END",
                options: [
                    { text: "Play Again", nextScene: "start", effects: { carLoveMeter: 0, youtubeSadness: 0 } }
                ],
                image: "car"
            },
            "ending_pirate_streamer": {
                text: "You become the #1 Sea of Thieves streamer, but your car dreams never fade. You build a pirate ship that looks like a car. THE END",
                options: [
                    { text: "Play Again", nextScene: "start", effects: { carLoveMeter: 0, youtubeSadness: 0 } }
                ],
                image: "thebsot_pirate"
            },
            "ending_hermit": {
                text: "You live peacefully in the woods, teaching squirrels about cars. They become the most knowledgeable squirrels about automobiles in the world. THE END",
                options: [
                    { text: "Play Again", nextScene: "start", effects: { carLoveMeter: 0, youtubeSadness: 0 } }
                ],
                image: "thebsot_pirate"
            },
            "ending_sad_documentary": {
                text: "Your Netflix documentary about YouTube burnout becomes a hit. You're known as the face of content creator mental health. THE END",
                options: [
                    { text: "Play Again", nextScene: "start", effects: { carLoveMeter: 0, youtubeSadness: 0 } }
                ],
                image: "youtube"
            },
            "ending_niche_car": {
                text: "You build a small but dedicated community of car enthusiasts. Your channel becomes a haven for those who love both gaming and cars. THE END",
                options: [
                    { text: "Play Again", nextScene: "start", effects: { carLoveMeter: 0, youtubeSadness: 0 } }
                ],
                image: "car"
            }
        };
    }

    updateStats(effects) {
        if (effects.carLoveMeter) {
            this.carLoveMeter = Math.max(0, Math.min(100, this.carLoveMeter + effects.carLoveMeter));
        }
        if (effects.youtubeSadness) {
            this.youtubeSadness = Math.max(0, Math.min(100, this.youtubeSadness + effects.youtubeSadness));
        }
    }

    makeChoice(choiceIndex) {
        const currentScene = this.scenes[this.currentScene];
        const choice = currentScene.options[choiceIndex];
        
        if (choice.effects) {
            this.updateStats(choice.effects);
        }
        
        this.currentScene = choice.nextScene;
        this.updateUI();
    }

    updateUI() {
        const scene = this.scenes[this.currentScene];
        
        // Update scene text
        document.getElementById('scene-text').textContent = scene.text;
        
        // Update scene image
        document.getElementById('scene-image').src = this.images[scene.image];
        
        // Update options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        scene.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option.text;
            button.onclick = () => this.makeChoice(index);
            optionsContainer.appendChild(button);
        });
        
        // Update meters
        document.getElementById('car-love-meter').style.width = `${this.carLoveMeter}%`;
        document.getElementById('youtube-sadness').style.width = `${this.youtubeSadness}%`;
    }
}

// Initialize the game when the page loads
window.addEventListener('load', () => {
    const game = new GameState();
    game.updateUI();
}); 