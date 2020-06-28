<template>
<div id="about">
    <svg viewBox="0 0 3387 1270">
  <path id="planePath" class="planePath" d="M-226 626c439,4 636,-213 934,-225 755,-31 602,769 1334,658 562,-86 668,-698 266,-908 -401,-210 -893,189 -632,630 260,441 747,121 1051,91 360,-36 889,179 889,179" />
  <g id="plane">
    <polygon class="fil1" points="-141,-10 199,0 -198,-72 -188,-61 -171,-57 -184,-57 " />
    <polygon class="fil2" points="199,0 -141,-10 -163,63 -123,9 " />
    <polygon class="fil3" points="-95,39 -113,32 -123,9 -163,63 -105,53 -108,45 -87,48 -90,45 -103,41 -94,41 " />
    <path class="fil4" d="M-87 48l-21 -3 3 8 19 -4 -1 -1zm-26 -16l18 7 -2 -1 32 -7 -29 1 11 -4 -24 -1 -16 -18 10 23zm10 9l13 4 -4 -4 -9 0z" />
    <polygon class="fil1" points="-83,28 -94,32 -65,31 -97,38 -86,49 -67,70 199,0 -123,9 -107,27 " />
  </g>
  <!-- Define the motion path animation -->
  <animateMotion xlink:href="#plane" dur="5s" repeatCount="indefinite" rotate="auto">
    <mpath xlink:href="#planePath" />
  </animateMotion> 
</svg>





    <header>
      <p class="first-p">うちで</p>
      <p class="second-p">学校！！</p>
    </header> 
    <div class="btn"> 
        <button @click="clickHome()">次へ</button>
    </div>
    
</div>
    
</template>
<script>
export default {
    methods: {
        clickHome() {
            alert('時間割づくりに進みます')
            this.$router.push('/Home')
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 768px){
  .first-p{
      font-size: 30px;
  }
  .second-p{
      font-size: 30px;
  }
}
header {
    position: relative;
}
.first-p{
    font-size: 150px;
    padding: 0px;
    margin: 0px 0px 0px 100px;
    color: #f3f3f3;
    text-shadow: 4px 4px 6px #9D9E9E;
}
.second-p{
    font-size: 150px;
    padding: 0px;
    margin: 0px 0px 0px 500px;
    color: #f3f3f3;
    text-shadow: 4px 4px 6px #9D9E9E;
}
.btn {
    position: relative;
}
button {
    position: absolute;
    right: 0;
    font-size: 50px;
    top: -90px;
}

 #about{
  background-color: #28505D;
}

.planePath {
  stroke: #D9DADA;
  stroke-width: .1%;
  stroke-width: .5%;
  stroke-dasharray: 1% 2%;
  stroke-linecap: round;
  fill: none;
}

.fil1 {
  fill: #D9DADA;
}

.fil2 {
  fill: #C5C6C6;
}

.fil4 {
  fill: #9D9E9E;
}

.fil3 {
  fill: #AEAFB0;
}
</style>
