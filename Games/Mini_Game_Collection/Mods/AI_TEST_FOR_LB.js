modVars.addVar("AI_TEST_FOR_LB", "aiAgent", function aiAgent(object=null) {
	this.object = object;
	let closestPlayer = null;
	let closestLine = null;
	let players = [];
	let thisRotation = 0;
	for (let i=1,length=gameData.maxPlayers.y;i<=length;i++) {
		let thisNT = nt("player_"+i, "lineBattle");
		if (!this.object.base.nameTag.same(thisNT)) {
			let thisPlayer = getByNameTag(thisNT);
			if (thisPlayer != null) {
				players.push(thisPlayer);
			}
		}
	}
	this.getClosest = (array=players) => {
		let minDist = Number.POSITIVE_INFINITY;
		let playerOBJ = null;
		for (let i=0,length=array.length;i<length;i++) {
			let newMinDist = Math.min(minDist, this.object.base.position.distance(array[i].base.position));
			if (minDist != newMinDist) {
				playerOBJ = array[i];
				minDist = newMinDist;
			}
		}
		return playerOBJ;
	}
	deleteUpdate(0, "timer_"+this.object.base.nameTag.name+"_AI_Timer", "AI_TEST_FOR_LB");
	let aiTimer = T(MSecond(100), true, true, true, () => {
		closestPlayer = this.getClosest();
		let thisLineArray = getByNameTag(name("line"), 1, false, true);
		if (thisLineArray != null) {
			let lineFilter = thisLineArray.filter((i) => {
				if (!i.base.nameTag.name.includes(this.object.base.nameTag.name)) {
					return this.object.base.position.distance(i.base.position) < 100;
				}
			});
			closestLine = this.getClosest(lineFilter);
		} else {
			closestLine = null;
		}
	}, this.object.base.nameTag.name+"_AI_Timer", "AI_TEST_FOR_LB");
	const update = () => {
		if (closestPlayer == null) {
		 	closestPlayer = this.getClosest();
		}
		let distToClosestPlayer = this.object.base.position.distance(closestPlayer.base.position)
		let targetPoint = closestPlayer.base.position.addV(Vec2(0, 60));
		let targetRotation = this.object.base.position.getRotation(closestPlayer.base.position);
		let target = closestPlayer.base.position.rotateVector2(targetPoint, targetRotation);
		
		if (distToClosestPlayer > 10) {
			if (closestLine == null) {
				thisRotation = closestPlayer.base.position.getRotation(this.object.base.position);
			} else {
				if (this.object.base.position.distance(closestLine.base.position) < 20) {
					thisRotation = closestLine.base.position.getRotation(this.object.base.position)+degToRad(180);
				} else {
					thisRotation = closestPlayer.base.position.getRotation(this.object.base.position);
				}
			}
		} else {
			thisRotation = target.getRotation(this.object.base.position);
		}
		if (this.object.base.position.r < thisRotation) {
			//right +
			this.object.base.position.r += degToRad(5*delta);
		} else {
			//left -
			this.object.base.position.r -= degToRad(5*delta);
		}
		if (gameData.gameMode == -1) {
			deleteUpdate(0, "timer_"+this.object.base.nameTag.name+"_AI_Timer", "AI_TEST_FOR_LB");
			deleteUpdate(0, this.object.base.nameTag.name+"_agentUpdate", "AI_TEST_FOR_LB");
		}
	}
	deleteUpdate(0, this.object.base.nameTag.name+"_agentUpdate", "AI_TEST_FOR_LB");
	addUpdate(update, this.object.base.nameTag.name+"_agentUpdate", "AI_TEST_FOR_LB");
});

modVars.addVar("AI_TEST_FOR_LB", "updateLoop", () => {
	let aiPlayers = {
		1:getByNameTag(nt("player_1", "lineBattle")),
		2:getByNameTag(nt("player_2", "lineBattle")),
		3:getByNameTag(nt("player_3", "lineBattle")),
		4:getByNameTag(nt("player_4", "lineBattle")),
		"length":4
	}
	let agent = getModVar("AI_TEST_FOR_LB", "aiAgent");
	if (gameData.gameMode == 1 && gameModeData[1].settings.ai) {
		for (let i=gameData.maxPlayers.x;i>gameModeData[1].settings.players;i--) {
			let thisAI = aiPlayers[i];
			if (thisAI != null && typeof thisAI.ai == "undefined") {
				thisAI.ai = new agent(thisAI);
			}
		}
	}
});
addUpdate(getModVar("AI_TEST_FOR_LB", "updateLoop"), "mainLoop", "AI_TEST_FOR_LB");