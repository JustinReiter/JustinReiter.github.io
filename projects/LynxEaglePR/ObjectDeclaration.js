// Used for Lynx & Eagle P/R League
function createPlayerObject() {
    return {seasonsPlayed: 0, seasonsPlayedInA: 0, winCountInA: 0, lossCountInA: 0, winCount: 0, lossCount: 0, get winRate() {return (this.winCount / (this.winCount + this.lossCount)).toFixed(4);}, get winRateInA() {return (this.winCountInA / (this.winCountInA + this.lossCountInA)).toFixed(4);}};
}