function ParticleSystem(x, y, s, ctx1, ctx2, death) { //location of emitter, # of particles to start
    this.emitter = new JSVector(x, y);
    this.parList = [];
    this.ctx1 = ctx1;
    this.ctx2 = ctx2;
    this.death = death;
}

ParticleSystem.prototype.run = function(){
    this.parList.push(new Particle(this.emitter, this.death, this.ctx1, this.ctx2));
    this.pdeath();
    for(let i = 0; i<this.parList.length; i++){
        this.parList[i].run;
    }
}


ParticleSystem.prototype.pdeath = function(){
    for(let i = this.parList.length -1; i>=0; i--){
        if(this.parList[i].isDead){
            this.parList.splice(i, 1);
        }
    }
}
