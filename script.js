
window.addEventListener('load', function(){
  const games = ["Slot Machine","Dice Roll","Poker","Blackjack","Teen Patti","Roulette","Baccarat","Dragon Tiger","Lucky Wheel","Rummy","Number Guessing","Scratch Card","Coin Toss","Sic Bo","Andar Bahar","Keno","Ludo","Craps","Video Poker","Progressive Jackpot","Mini Lottery","Mahjong","Card Hi-Lo","Wheel of Fortune","Bingo","Multi-Line Slot","Joker Wild","Lucky Number","Casino War","Super Ace"];
  const el = document.getElementById('homeGames');
  for(let i=0;i<6;i++){
    const d = document.createElement('div'); d.className='game-card';
    d.innerHTML = '<img src="assets/game'+((i%6)+1)+'.png"><div class="game-title">'+games[i]+'</div>';
    el.appendChild(d);
  }
});
