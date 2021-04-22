function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: "",
      battleLogs: [],
    };
  },
  computed: {
    monsterHealthBar() {
      if (this.monsterHealth < 0) {
        return {
          width: "0%",
        };
      }
      return {
        width: this.monsterHealth + "%",
      };
    },
    playerHealthBar() {
      if (this.playerHealth < 0) {
        return {
          width: "0%",
        };
      }
      return {
        width: this.playerHealth + "%",
      };
    },
    specialAttackAvailability() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        //DRAW
        this.winner = "draw";
      } else if (value <= 0) {
        //PLAYER LOSS
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        //DRAW
        this.winner = "draw";
      } else if (value <= 0) {
        //MONSTER LOSS
        this.winner = "player";
      }
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      damage = getRandomValue(5, 12);
      this.monsterHealth -= damage;
      this.addLogMessage("player", "attack", damage);
      this.attackPlayer();
    },
    attackPlayer() {
      damage = getRandomValue(8, 15);
      this.playerHealth -= damage;
      this.addLogMessage("monster", "attack", damage);
    },
    specialAtatckMonster() {
      this.currentRound++;
      damage = getRandomValue(10, 25);
      this.monsterHealth -= damage;
      this.addLogMessage("player", "attack", damage);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;

      }
      this.addLogMessage("player", "heal", healValue);
      this.attackPlayer();
    },
    reset() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 0;
      this.winner = "";
      this.battleLogs = [];
    },
    surrender() {
      this.playerHealth = 0;
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.battleLogs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
